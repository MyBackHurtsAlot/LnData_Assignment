const pool = require("./pool");
const playersData = require("./players.json");
const importData = async () => {
    try {
        const connection = await pool.getConnection();

        const [lastRecord] = await connection.query(
            "SELECT MAX(timestamp_field) AS lastTimestamp FROM players"
        );
        const lastTimestamp = lastRecord[0].lastTimestamp;

        const newPlayersData = playersData.filter(
            (player) => player.timestamp > lastTimestamp
        );

        if (newPlayersData.length > 0) {
            const insertPromises = newPlayersData.map(async (player) => {
                await connection.query("INSERT INTO players SET ?", player);
            });

            await Promise.all(insertPromises);

            console.log(`${newPlayersData.length} new data imported`);
        }

        connection.release();
    } catch (error) {
        console.error("Error:", error);
    }
};

module.exports = importData;
