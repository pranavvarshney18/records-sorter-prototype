const express = require("express");
const app = express();
const port = 8000;

//setting a fixed layout for every view
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

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