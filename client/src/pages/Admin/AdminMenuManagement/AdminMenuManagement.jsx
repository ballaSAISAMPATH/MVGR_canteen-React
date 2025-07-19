import React, { useEffect, useState } from 'react';
import axios from "axios";
import { setMenuItems } from '../../../store/UserInfo/store';
import {useDispatch, useSelector} from 'react-redux'
import MenuCardsHolder from '../../../components/MenuCardsHolder/MenuCardsHolder';
import "./AdminMenuManagement.css";
import { toast } from 'react-toastify';
export default function AdminMenuManagement() {
  const URL = useSelector((state)=>state.store.serverURL);
  const [dishUploadloading,setDishUploadLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
      axios.get(URL+"/getMenuItems").then((responseList)=>{ 
      console.log(responseList.data);
      dispatch(setMenuItems(responseList.data));});        

    },[]);

    async function handleDishDelete(dishID,dishName){{
      console.log(dishID);
      const response =await axios.delete(URL+"/deleteDish",{data:{dishID:dishID}});
      console.log("dishDeleted",response.data.dishDeleted);
      if(response.data.dishDeleted){
        toast.success(dishName+" removed from database successfully");
      }
      else{
        toast.error(dishName+" deletion failed");
      }
      const menuList = await axios.get(URL+"/getMenuItems");
      dispatch(setMenuItems(menuList.data));
    }}

    //on dish upload form submit
  async function dishUpload(e){
    e.preventDefault();
    setDishUploadLoading(true);
    //check for dish existence
    let dishExists = await axios.post(URL+"/dishExists",{DishName:e.target[0].value});
    console.log("dishExists : ",dishExists.data.dishExists);
    if(dishExists.data.dishExists){
      setDishUploadLoading(false);
    }
    if(!dishExists.data.dishExists){
      let file=e.target[4].files[0];
      if (!file) return;
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", "menu_images");         
        form.append("folder", "dishes");     

        let response = await axios.post("https://api.cloudinary.com/v1_1/dl0zg9wq3/image/upload",form);
        console.log(response.data.url);
        let dish={
        DishName:e.target[0].value,
        DishType:e.target[1].value,
        DishPrice:e.target[2].value,
        DishDescription:e.target[3].value,
        DishImageURL:response.data.url,
      }
      //dish upload
      let dbResponse = await axios.post(URL+"/dishUpload",dish);
      
      toast.success(
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={response.data.url}
          alt="dish"
          height="40"
          width="40"
          style={{ marginRight: "10px", borderRadius: "5px" }}
        />
        <div> 
          <div style={{ fontWeight: "bold", color: "white" }}>Dish Uploaded</div>
          <div style={{ color: "white" }}>{e.target[0].value}</div>
        </div>
      </div>,
      {
        icon: false,
        style: { background: "#198754", color: "#fff" },
        autoClose: 5000,
        position: "bottom-right",
      }
    );
      setDishUploadLoading(false);
      //obtaining menulist
      const menuList = await axios.get(URL+"/getMenuItems");
      dispatch(setMenuItems(menuList.data));
    }
    else{
      toast.error(e.target[0].value+"  already exists.")
    }
  }

  return (
    <div className='d-flex flex-row flex-wrap col-12 adminMenuManagementPageContainer  '>
      <div className='adminMenuManagementUploadSection border-end border-1 border-dark-subtle col-12 col-lg-3'>
        <h4 className='adminNewDishRegisterTitle text-center pt-3'>Register a dish:</h4>
        <form onSubmit={(event)=>{dishUpload(event)}} className='col-12 p-3 d-flex flex-column gap-3' action="">
          <div className='form-floating'>
            <input type="text" className="form-control" id='DishName' placeholder="Dish Name" required/>
            <label htmlFor="DishName">dish name</label>
          </div>
          <select className="form-select" aria-label="Default select example" required>
            <option value="" defaultValue>select dish type</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Side Dishes">Side Dishes</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
          <div className='form-floating'>
            <input type="number" min='0' className="form-control" id='DishPrice' placeholder="Dish Price" required/>
            <label htmlFor="DishPrice">dish Price</label>
          </div>
          <div className='form-floating'>
            <input  type="text" className="form-control" id='DishDescription' placeholder="Dish Description" required/>
            <label htmlFor="DishDescription">dish Description</label>
          </div>
          <div className='form-floating'>
            <input type="file" className="form-control" id='DishImage' placeholder="Dish Image" required/>
            <label htmlFor="DishImage">upload dish image</label>
          </div> 


          <input type="submit" className="AdminMenuManagementDishUploadButton btn btn-primary"/>   
          {dishUploadloading?
          <div className='d-flex flex-row  p-1 gap-3'>

          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
          <span>dish uploading, please wait.</span>
          </div>
            :""}
        </form>
      </div>  
      <div className='adminMenuControlSection d-flex justify-content-center flex-wrap col-12 col-lg-9  '>
        <MenuCardsHolder handleDishDelete={handleDishDelete} className='adminMenuControlSection d-flex justify-content-center flex-wrap col-12 col-lg-9  '/>  
      <div className='col-12 text-center text-dark py-5'>&lt;--- end of the list ---&gt;</div>
      </div>
</div>
  )
}