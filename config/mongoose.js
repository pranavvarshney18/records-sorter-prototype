const mongoose = require("mongoose");

//connecting mongoose to mongdb
mongoose.connect("mongodb://localhost/record_ver_1_1");
//get the connection
const db = mongoose.connection;

//error 
db.on("error", console.error.bind(console, "error connnecting to db"));

//if up and running 
db.once("open", function(){
    console.log("Successfully connected to the database");
});

module.exports = db;