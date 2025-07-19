import Dish from "../../models/Dish/dishes.js";

export const DeleteDish = async (req,res)=>{
    try{
        console.log(req.body);
        
        //const response = Dish.findByIdAndDelete();
    }
    catch(error){
        console.log(error);
    }
}