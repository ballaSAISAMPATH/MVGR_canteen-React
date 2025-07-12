import React, { useEffect, useState } from 'react'
import axios from "axios"
import { setMenuItems } from '../../../store/UserInfo/store';
import {useDispatch, useSelector} from 'react-redux'
import MenuCardsHolder from '../../../components/MenuCardsHolder/MenuCardsHolder';
export default function AdminMenuManagement() {
  const URL = useSelector((state)=>state.store.serverURL);
  const [dishUploadloading,setDishUploadLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
      axios.get(URL+"/getMenuItems").then((responseList)=>{ 
      console.log(responseList.data);
      dispatch(setMenuItems(responseList.data));});        
    },[]);
    
  async function adminMenuSubmit(e){
    e.preventDefault();
    setDishUploadLoading(true);
    let dishExists = await axios.post(URL+"/adminDishExists",{DishName:e.target[0].value});
    console.log("dishExists : ",dishExists.data.dishExists);
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
      let dbResponse = await axios.post(URL+"/adminMenuDishUpload",dish)
      setDishUploadLoading(false);
      const menuList = await axios.get(URL+"/getMenuItems");
      dispatch(setMenuItems(menuList.data));
      document.getElementById("AdminMenuManagementDishExistsText").innerHTML="<div class='text-success fs-4' ><i>dish added</i></div>";
    }
    else{
      document.getElementById("AdminMenuManagementDishExistsText").innerHTML="<div class='text-danger fs-4' ><i>dish exists</i?</div>";    
    }
  }
  function adminMenuManagementInputOnChange(){
          document.getElementById("AdminMenuManagementDishExistsText").innerHTML="";

  }
  return (
    <div className='d-flex flex-row flex-wrap col-12 adminMenuManagementPageContainer  '>
      <div className='adminMenuManagementUploadSection border-end border-1 border-dark-subtle col-12 col-lg-3'>
        <h4>Register a dish:</h4>
        <form onSubmit={(event)=>{adminMenuSubmit(event)}} className='col-12 p-3 d-flex flex-column gap-3' action="">
          <div className='form-floating'>
            <input onChange={()=>{adminMenuManagementInputOnChange()}} type="text" className="form-control" id='DishName' placeholder="Dish Name"/>
            <label htmlFor="DishName">dish name</label>
          </div>
          <select className="form-select" aria-label="Default select example">
            <option value="" defaultValue>select dish type</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Side Dishes">Side Dishes</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
          <div className='form-floating'>
            <input onChange={()=>{adminMenuManagementInputOnChange()}} type="number" min='0' className="form-control" id='DishPrice' placeholder="Dish Price"/>
            <label htmlFor="DishPrice">dish Price</label>
          </div>
          <div className='form-floating'>
            <input onChange={()=>{adminMenuManagementInputOnChange()}}  type="text" className="form-control" id='DishDescription' placeholder="Dish Description"/>
            <label htmlFor="DishDescription">dish Description</label>
          </div>
          <div className='form-floating'>
            <input onChange={()=>{adminMenuManagementInputOnChange()}} type="file" className="form-control" id='DishImage' placeholder="Dish Image"/>
            <label htmlFor="DishImage">upload dish image</label>
          </div> 

          <div id="AdminMenuManagementDishExistsText"></div>

          {dishUploadloading?
          <div className='d-flex flex-row  p-1 gap-3'>

          <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
          <span>dish uploading, please wait.</span>
          </div>
            :""}
          <input type="submit" className="AdminMenuManagementDishUploadButton btn btn-primary"/>   
        </form>
      </div>
          <div className='adminMenuControlSection d-flex justify-content-between flex-wrap col-12 col-lg-9  '>
            <MenuCardsHolder />  
          </div>
      </div>
  )
}