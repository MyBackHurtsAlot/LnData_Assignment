const pool = require("../pool");

const playerModel = {
    getAllPlayers: async (offset, pageSize) => {
        const connection = await pool.getConnection();
        try {
            const [results] = await connection.query(
                "SELECT * FROM players LIMIT ?, ?",
                [offset, pageSize]
            );
            return results;
        } finally {
            connection.release();
        }
    },
    getPlayerCount: async () => {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query(
                "SELECT COUNT(*) AS count FROM players"
            );
            return result[0].count;
        } finally {
            connection.release();
        }
    },
    //TeamNames
    getAllTeamNames: async () => {
        const connection = await pool.getConnection();
        try {
            const query = "SELECT DISTINCT team_name FROM players";
            const [results] = await connection.query(query);
            // const teamNames = results.map((row) => row.team_name);
            return results;
        } finally {
            connection.release();
        }
    },
    //Search
    searchPlayer: async (name) => {
        const connection = await pool.getConnection();
        try {
            let query = "SELECT * FROM players";
            let params = [];
            if (name) {
                query += " WHERE name LIKE ?";
                params.push(`%${name}%`);
            }
            const [results] = await connection.query(query, params);
            return results;
        } finally {
            connection.release();
        }
    },
    searchId: async (id) => {
        const connection = await pool.getConnection();
        try {
            const query = "SELECT * FROM players WHERE id = ?";
            const [results] = await connection.query(query, [id]);
            return results;
        } finally {
            connection.release();
        }
    },
};

module.exports = playerModel;
