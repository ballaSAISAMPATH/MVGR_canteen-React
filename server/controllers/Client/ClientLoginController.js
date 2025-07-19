import User from "../../models/Client/users.js";

export const ClientLogin = async (req,res)=>{
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

    
}