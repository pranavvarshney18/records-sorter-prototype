const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    make:{
        type: String,
    },
    model:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
    },
    record:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Record",
    }
}, {
    timestamps: true,
});


const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;