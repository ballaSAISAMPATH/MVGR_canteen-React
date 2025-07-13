import { Router } from "express";
const router = Router();
import Admin from "../../models/admin.js";

router.post("/adminLogin",async (req,res)=>{
    let response =await Admin.find({adminID:req.body.adminID,adminPassword:req.body.adminPassword})
    console.log(response);
    
        if(response.length==0){
            res.json({adminLogged:false});
        }
        else{
            res.json({adminLogged:true});
        }
})

export default router;