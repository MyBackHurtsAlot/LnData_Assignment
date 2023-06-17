const Player = require("../models/index");

exports.getAllData = async (req, res) => {
    const { page } = req.params;
    const pageSize = 15;
    const offset = (page - 1) * pageSize;
    try {
        const allData = await Player.getAllPlayers(offset, pageSize);
        const count = await Player.getPlayerCount();
        const totalPages = Math.ceil(count / pageSize);
        res.json({
            data: allData,
            total: count,
            currentPage: parseInt(page),
            totalPages: totalPages,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllTeamNames = async (req, res) => {
    try {
        const teamNames = await Player.getAllTeamNames();
        res.json(teamNames);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.searchPlayer = async (req, res) => {
    try {
        const name = req.query.name;
        const players = await Player.searchPlayer(name);
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.searchDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const players = await Player.searchId(id);
        res.json(players);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
