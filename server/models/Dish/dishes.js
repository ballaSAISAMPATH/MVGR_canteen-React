import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema({
  DishName:{type:String,required:true},
  DishType:{type:String,required:true},
  DishPrice:{type:Number,required:true},
  DishDescription:{type:String,required:true},
  DishImageURL:{type:String,required:true},
  DishRating:{type:String,default:0},
  DishUploadDate:{type:Date,default:Date.now},
  DisplayDish:{type:Boolean,default:false},
  isAvailable:{type:Boolean,default:true},
})
const Dish = model("Dish", Schema);
export default Dish;