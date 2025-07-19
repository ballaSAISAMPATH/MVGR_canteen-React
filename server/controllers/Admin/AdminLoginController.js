import Admin from "../../models/Admin/admin.js";

export const AdminLogin = async (req,res)=>{
    let response =await Admin.find({adminID:req.body.adminID,adminPassword:req.body.adminPassword})
    console.log(response);
    
        if(response.length==0){
            res.json({adminLogged:false});
        }
        else{
            res.json({adminLogged:true});
        }
}