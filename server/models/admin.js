import { Schema, model } from 'mongoose';
const admin= Schema({
    adminID:{type:String,required:true},
    adminPassword:{type:String,required:true},
    lastLogin:{type:Date,default:Date.now},
})
const Admin = model("Admin",admin);
export default Admin;