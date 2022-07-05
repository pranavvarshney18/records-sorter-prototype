const express = require("express");
//create a router object
const router = express.Router();
router.use(express.urlencoded()); //must be added to create and parse a record

//get home_controller location
const homeController = require("../controllers/home_controller");
router.use("/entries", require("./entries.js"));

router.get("/", homeController.home);
router.post("/create-record", homeController.createRecord);

//check if router is loading properly
console.log("router loaded");

module.exports = router;