const express = require("express");
const router = require("./routes/index");
const { importData, exportData } = require("./importData");

const app = express();
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
const port = 9999;

importData().then(() => {
    exportData();
});

// 設定路由
app.use("/api/players", router);

// 啟動伺服器
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
