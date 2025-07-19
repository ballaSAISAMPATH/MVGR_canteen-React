import Dish from "../../models/Dish/dishes.js";

export const DishUpload = async (req,res)=>{
    console.log(req.body);
    let response =await Dish.find({DishName:req.body.DishName});
    if(response.length>0){
        return res.json({dishCreated:false});
    }
    else {
        await Dish.create(req.body);
        return res.json({dishCreated:true});
    }
    
};

