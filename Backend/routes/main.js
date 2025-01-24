const express = require("express");
const router = express.Router();
const Router = require("../controller/mainController")


router.get("/", Router.welcomeMsg);


module.exports = router;