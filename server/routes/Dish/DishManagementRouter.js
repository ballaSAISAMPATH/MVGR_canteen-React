import { Router } from "express";
const router = Router();
import Dish from "../../models/dishes.js";

router.post("/adminMenuDishUpload",async (req,res)=>{
    console.log(req.body);
    //let response = Dish.create(req.body)
    let response =await Dish.find({DishName:req.body.DishName});
    if(response.length>0){
        return res.json({dishCreated:false});
    }
    else {
        await Dish.create(req.body);
        return res.json({dishCreated:true});
    }
    
})
router.post("/adminDishExists",async (req,res)=>{
    console.log(req.body.DishName);
    let response = await Dish.find({DishName:req.body.DishName});
    if(response.length>0){
        return res.json({dishExists:true});

    }
    else {
        return res.json({dishExists:false});
    }
})

router.get("/getMenuItems",async(req,res)=>{
    const response = await Dish.find();
    res.json(response);
})

export default router ;