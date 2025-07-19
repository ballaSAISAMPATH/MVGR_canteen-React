import User from "../../models/Client/users.js";

async function createDocument(obj){
    const response= await User.create(obj);
   
}
export const ClientSignUp = async (req,res)=>{
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
     
};