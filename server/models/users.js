const mongoose= require("mongoose");
const user = mongoose.Schema({
    name:{type:String,required:true},
    mail:{type:String,required:true},
    rollNo:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const User= mongoose.model("Users",user);
module.exports=User;