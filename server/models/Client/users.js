import { Schema, model } from "mongoose";
const user = Schema({
    name:{type:String,required:true},
    mail:{type:String,required:true},
    rollNo:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const User= model("Users",user);
export default User;