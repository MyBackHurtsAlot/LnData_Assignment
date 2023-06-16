const Player = require("../models/index");

exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.getAll();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getPlayerById = async (req, res) => {
    const playerId = req.params.id;
    try {
        const player = await Player.getById(playerId);
        if (player) {
            res.json(player);
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.searchPlayers = async (req, res) => {
    const query = req.query.query;
    try {
        const players = await Player.search(query);
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createPlayer = async (req, res) => {
    const playerData = req.body;
    try {
        const createdPlayer = await Player.create(playerData);
        res.status(201).json(createdPlayer);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updatePlayer = async (req, res) => {
    const playerId = req.params.id;
    const playerData = req.body;
    try {
        const updatedPlayer = await Player.update(playerId, playerData);
        if (updatedPlayer) {
            res.json(updatedPlayer);
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deletePlayer = async (req, res) => {
    const playerId = req.params.id;
    try {
        const deletedPlayer = await Player.delete(playerId);
        if (deletedPlayer) {
            res.json({ message: "Player deleted successfully" });
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
