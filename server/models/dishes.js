const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  DishName:{type:String,required:true},
  DishType:{type:String,required:true},
  DishPrice:{type:Number,required:true},
  DishDescription:{type:String,required:true},
  DishImageURL:{type:String,required:true},
  DishRating:{type:String,default:0},
  DishUploadDate:{type:Date,default:Date.now},
})
const Dish = mongoose.model("Dish", Schema);
module.exports=Dish;