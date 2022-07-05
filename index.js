const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
const session = require("express-session");
const Record = require("./models/record");
const Entry = require("./models/entry");
const app = express();
const port = 8000;
const flash = require("connect-flash");
const customMware = require("./config/middleware");

//setting a fixed layout for every view
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
//adding css and js files from layout.ejs to required ejs files
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//include static files
app.use(express.static("./assets"));

//set up flash message
app.use(session({
    name: "records",
    secret: "something",
    saveUninitialized: true,
    resave: true

}));
app.use(cookieParser());
app.use(flash());
app.use(customMware.setFlash); //middleware

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