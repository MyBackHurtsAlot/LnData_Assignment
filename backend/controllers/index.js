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
        const { page } = req.params;
        const pageSize = 15;
        const offset = (page - 1) * pageSize;
        const name = req.query.name;

        const players = await Player.searchPlayer(name, offset, pageSize);
        const count = await Player.getSearchPlayerCount(name);
        const totalPages = Math.ceil(count / pageSize);

        res.json({
            data: players,
            total: count,
            currentPage: parseInt(page),
            totalPages: totalPages,
        });
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
exports.getTeamsUnder15 = async (req, res) => {
    try {
        const teamNames = await Player.getTeamsWithCount();
        res.json(teamNames);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllTeamData = async (req, res) => {
    let { teamName, page } = req.params;
    teamName = decodeURIComponent(teamName);
    const pageSize = 15;
    const offset = (page - 1) * pageSize;
    try {
        const teamData = await Player.getTeamData(teamName, offset, pageSize);
        const teamDataCount = await Player.getTeamDataCount(teamName);
        const totalPages = Math.ceil(teamDataCount / pageSize);

        res.json({
            data: teamData,
            total: teamDataCount,
            currentPage: parseInt(page),
            totalPages,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
