import Dish from "../../models/Dish/dishes.js";

export const DeleteDish = async (req,res)=>{
    try{
        console.log(req.body);
        
        const response = await Dish.findByIdAndDelete(req.body.dishID);
        console.log(response);
        if(response){
            res.json({dishDeleted:true});
        }
        else{
            res.json({dishDeleted:false});
        }
            
    }
    catch(error){
        console.log(error);
        res.json({dishDeleted:false});
    }
}