//get record db
const { render } = require("ejs");
const Record = require("../models/record");
const Entry = require("../models/entry");

module.exports.home = function(req, res){
    Record.find({}, function(err, records){
        if(err){console.log("error in fetching records from database", err); return;};

        return res.render("home", {
            title: "Records",
            record_list: records,
        })
    }).sort({date: -1});
};

module.exports.createRecord = function(req, res){
    //check if record with same name already exist
    Record.findOne({name: req.body.name}, function(err, record){
        if(err){console.log("error in finding record during same name check", err); return;}

        //if name is unique
        if(!record){
            req.flash("success", "New Record Created!");
            Record.create(req.body, function(err, newRecord){
                if(err){console.log("error in creating the record", err); return;}
                console.log("*** new record created ***", newRecord);
                return res.redirect("back");
            });
        }
        else{
            req.flash("error", "Given Name Already Exists!")
            console.log("the given name already exists, please provide a new one");
            return res.redirect("back");
        }
    });
};


module.exports.deleteRecord = function(req, res){
    //first delete all the entries inside record
    Entry.deleteMany({record: req.query.record_id}, function(err){
        if(err){console.log("error in deleting entries while deleting a record: ", err); return;}

    })
    //now delete the record
    Record.findByIdAndDelete(req.query.record_id, function(err){
        if(err){req.flash("error", "Unable To Delete");console.log("error in deleting record: ", err); return;}
        req.flash("success", "Deleted Successfully!");
        return res.redirect("back");
    })
};
