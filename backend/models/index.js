const pool = require("../pool");

const sql = require("mysql");

// 取得所有球員資料的模型方法
exports.getAll = (callback) => {
    const query = "SELECT * FROM players";

    pool.getConnection((err, connection) => {
        if (err) {
            console.error("無法建立資料庫連線:", err);
            callback(err, null);
            return;
        }

        connection.query(query, (err, results) => {
            connection.release(); // 釋放連線回連接池

            if (err) {
                console.error("無法取得球員資料:", err);
                callback(err, null);
                return;
            }

            callback(null, results);
        });
    });
};
