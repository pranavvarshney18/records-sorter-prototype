const Record = require("../models/record");
const Entry = require("../models/entry");
//to sort according to user conditions
var Fields = {};



module.exports.home = function(req, res){
    Fields.record = req.query.record_id;

    Entry.find(Fields, function(err, entries){
        //empty Fields
        Fields = {};
        
        if(err){console.log("error in fetching entries from database", err); return;}

        return res.render("entries", {
            title: "Entries",
            record_id: req.query.record_id,
            entry_list: entries,
        })
    }).sort({price: 1});
};


module.exports.createEntry = function(req, res){
    Entry.create(req.body, function(err, newEntry){
        if(err){console.log("error in creating the entry", err); return;}
        console.log("*** new entry created ***", newEntry);
        return res.redirect("back");
    })
};



module.exports.sortFields = function(req, res){
    Fields = {};
    if(req.body.name != ''){
        Fields.name = req.body.name;
    }
    if(req.body.make != ''){
        Fields.make = req.body.make;
    }
    if(req.body.model != ''){
        Fields.model = req.body.model;
    }
    if(req.body.price != ''){
        Fields.price = req.body.price;
    }
    
    return res.redirect(`/entries/record-access/?record_id=${req.body.record}`);
};



module.exports.deleteEntry = function(req, res){
    Entry.findByIdAndDelete(req.query.entry_id, function(err){
        if(err){console.log("error in deleting entry: ", err); return;}
        return res.redirect("back");
    });
};