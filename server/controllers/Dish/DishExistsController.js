import Dish from "../../models/Dish/dishes.js";

export const DishExists = async (req,res)=>{
    console.log(req.body.DishName);
    let response = await Dish.find({DishName:req.body.DishName});
    if(response.length>0){
        return res.json({dishExists:true});

    }
    else {
        return res.json({dishExists:false});
    }
};