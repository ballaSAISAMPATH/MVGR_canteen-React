import { Router } from "express";
const router = Router();
import User from "../../models/users.js";

async function createDocument(obj){
    const response= await User.create(obj);
   
}
router.post("/signup",async (req,res)=>{
        console.log(req.body);
        let response = await User.find({$or:[{rollNo:req.body.rollNo},{mail:req.body.mail}]})
        console.log("here",response);
        
        if(response.length>0){
        return res.json({userExists:true});
        }
        else if(response.length==0){
            createDocument(req.body);
           return res.json({userExists:false});
        }
     
});

router.post("/clientLogin",async (req,res)=>{
    console.log(req.body);   
    let response = await User.find({rollNo:req.body.rollNo,password:req.body.password})
        
        if(response.length>0){            
            res.json({userExists:true,
                name:response[0].name,
                mail:response[0].mail,
                rollNo:response[0].rollNo,
                date:response[0].date,
                userID:response[0]._id.toString(),
            });
        }
        else if(response.length==0){
            console.log(false);
            res.json({userExists:false,})
        }

    
})

export default router;