const express = require("express");
const router = express.Router();
const playerController = require("../controllers/index");

router.get("/");
router.get("/api/allData/:page", playerController.getAllData);
router.get("/api/teams", playerController.getAllTeamNames);
router.get("/api/searchPlayer", playerController.searchPlayer);
router.get("/api/playerDetail/:id", playerController.searchDetail);

module.exports = router;
