const express = require("express");
const router = require("./routes/index");
const importData = require("./importData");

const app = express();

const port = 9999;

importData();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use("/", router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
