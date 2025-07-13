import dotenv from "dotenv"
import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
import ClientLoginSignupRouter from "./routes/Client/ClientLoginSignupRouter.js";
import AdminLoginRouter from "./routes/Admin/AdminLoginRouter.js";
import DishManagementRouter from "./routes/Dish/DishManagementRouter.js";
const app = express();
dotenv.config();
const port = process.env.REACT_APP_PORT || 3000;
const databaseURL=process.env.REACT_APP_DATABASE_URL;
app.use(cors());
app.use(json());
app.use(ClientLoginSignupRouter);
app.use(AdminLoginRouter);
app.use(DishManagementRouter);
app.listen(port,()=>{
    console.log(`server started at ${port}`);
}); 
connect(databaseURL).then(()=>{
    console.log("connected to mongoDb")
}).catch((err)=>{
        console.log('coonection failure')
    })
app.get("/",(req,res)=>{
    console.log(req);
    res.send("Hello World");
});




