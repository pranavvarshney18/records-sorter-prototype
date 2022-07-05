const express = require("express");
//create a router object
const router = express.Router();
router.use(express.urlencoded()); //must be added to create and parse a record


const entryController = require("../controllers/entry_controller");

router.get("/record-access", entryController.home);
//create entry
router.post("/create-entry", entryController.createEntry);
//sort entries
router.post("/sort-fields", entryController.sortFields);
//delete entry
router.get("/delete-entry", entryController.deleteEntry);

module.exports = router;