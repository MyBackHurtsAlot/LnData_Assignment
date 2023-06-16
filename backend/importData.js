const pool = require("./pool");
const fs = require("fs");
const util = require("util");
const playersData = require("./players.json");
const importData = async () => {
    try {
        const connection = await pool.getConnection();

        // 取得最後一筆資料的時間戳記
        const [lastRecord] = await connection.query(
            "SELECT MAX(timestamp_field) AS lastTimestamp FROM players"
        );
        const lastTimestamp = lastRecord[0].lastTimestamp;

        // 過濾出新的資料
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
        await exportData();

        connection.release();
    } catch (error) {
        console.error("Error:", error);
    }
};

const exportData = async () => {
    let connection;
    try {
        connection = await pool.getConnection();

        const [rows] = await connection.query("SELECT * FROM players");
        const jsonData = JSON.stringify(rows);

        await util.promisify(fs.writeFile)("nba.sql", jsonData);
    } catch (error) {
        console.error("Error exporting data:", error);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};
module.exports = { importData, exportData };
