import Dish from "../../models/Dish/dishes.js"
export const GetMenuItems = async(req,res)=>{
    const response = await Dish.find();
    res.json(response);
};