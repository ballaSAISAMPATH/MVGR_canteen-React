const express = require("express");
const cors= require("cors");
const mongoose= require("mongoose");
const app = express();
const User =require("./models/users")
const Admin=require("./models/admin")
const Dish =require("./models/dishes")
const databaseURL="mongodb://localhost:27017/database";
require('dotenv').config();
const port = process.env.REACT_APP_PORT || 3000;
app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log(`server started at ${port}`); 
});
mongoose.connect(databaseURL).then(()=>{
    console.log("connected to mongoDb")
}).catch((err)=>{
        console.log('coonection failure')
    })
app.get("/",(req,res)=>{
    console.log(req);
    res.send("Hello World");
});
async function createDocument(obj){
    const response= await User.create(obj);
   
}
app.post("/signup",async (req,res)=>{
        let response = await User.find({$or:[{rollNo:req.body.rollNo},{mail:req.body.mail}]})
        
        if(response.length>0){
        return res.json({userExists:true});
        }
        else if(response.length==0){
            createDocument(req.body);
           return res.json({userExists:false});
        }
     
});

app.post("/clientLogin",async (req,res)=>{
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
app.post("/adminLogin",(req,res)=>{
    let response = Admin.find({adminID:req.body.adminID,adminPassword:req.body.adminPassword,})
        if(response.length==0){
            res.json({adminLogged:false});
        }
        else{
            res.json({adminLogged:true});
        }
})

app.post("/adminMenuDishUpload",async (req,res)=>{
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
app.post("/adminDishExists",async (req,res)=>{
    console.log(req.body.DishName);
    let response = await Dish.find({DishName:req.body.DishName});
    if(response.length>0){
        return res.json({dishExists:true});

    }
    else {
        return res.json({dishExists:false});
    }
})