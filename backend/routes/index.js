const express = require("express");
const router = express.Router();
const playerController = require("../controllers/index");

router.get("/");
router.get("/api/allData/:page", playerController.getAllData);
router.get("/api/teams", playerController.getAllTeamNames);
router.get("/api/searchPlayer/:page", playerController.searchPlayer);
router.get("/api/playerDetail/:id", playerController.searchDetail);
router.get("/api/under15", playerController.getTeamsUnder15);
router.get("/api/teamData/:teamName/:page", playerController.getAllTeamData);

module.exports = router;
