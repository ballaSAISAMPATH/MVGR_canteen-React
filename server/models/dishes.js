const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    dishName:{type:String,required:true},
      dishType:{type:String,required:true},
      DishPrice:{type:Number,required:true},
      DishDescription:{type:String,required:true},
      DishImageURL:{type:String,required:true},
      DishRating:{type:String,default:0},
})
const Dish = mongoose.model("Dish", Schema);
module.exports=Dish;