const mongoose = require("mongoose");


const recordSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    date:{
        type: String,
        required: true
    },
    info:{
        type: String
    },

},{
    timestamps: true,
});


//defining name of schema as it will be called in db
const Record = mongoose.model("Record", recordSchema);


module.exports = Record;
