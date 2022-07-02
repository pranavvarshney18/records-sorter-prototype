const express = require("express");
//create a router object
const router = express.Router();

//get home_controller location
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home)

//check if router is loading properly
console.log("router loaded");

module.exports = router;