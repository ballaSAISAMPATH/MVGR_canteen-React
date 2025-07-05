const mongoose = require('mongoose');
const admin= mongoose.Schema({
    adminID:{type:String,required:true},
    adminPassword:{type:String,required:true},
    lastLogin:{type:Date,default:Date.now},
})
const Admin = mongoose.model("Admin",admin);
module.exports=Admin;