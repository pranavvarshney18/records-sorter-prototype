const express = require("express");
const db = require("./config/mongoose");
const Record = require("./models/record");
const Entry = require("./models/entry");
const app = express();
const port = 8000;

//setting a fixed layout for every view
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
//adding css and js files from layout.ejs to required ejs files
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//include static files
app.use(express.static("./assets"));

//set path for routes
app.use("/", require("./routes/index"));
//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${port}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
});