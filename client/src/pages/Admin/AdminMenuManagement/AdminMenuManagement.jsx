import React, { useEffect, useState } from 'react'
import axios from "axios"
import { setMenuItems } from '../../../store/UserInfo/store';
import {useDispatch, useSelector} from 'react-redux'
import Toaster from '../../../components/Toast';
import MenuCardsHolder from '../../../components/MenuCardsHolder/MenuCardsHolder';
import "./AdminMenuManagement.css"

export default function AdminMenuManagement() {
  const URL = useSelector((state)=>state.store.serverURL);
  const [dishUploadloading,setDishUploadLoading] = useState(false);
  const dispatch = useDispatch();
  const [DishUploaded, setDishUploaded] = useState(false);
  const [dishExistsMsg,setDishExistsMsg] = useState(false);
  const [recentUploadedDishName,setRecentUploadedDishName] = useState("");
  const [recentUploadedDishurl,setRecentUploadedDishurl] = useState("");

  useEffect(()=>{
      axios.get(URL+"/getMenuItems").then((responseList)=>{ 
      console.log(responseList.data);
      dispatch(setMenuItems(responseList.data));});        
    });

    async function handleDishDelete(dishID){{
      console.log(dishID);
      const response =await axios.delete(URL+"/deleteDish",dishID);
      //console.log(response);
    }}

    //toasts
    const dishUploadToastShow=()=>{
      setDishUploaded(!DishUploaded);
      console.log("dishupload" +DishUploaded);
      
    }
    //toasts
    const dishExistsToastShow=()=>{
      setDishExistsMsg(!dishExistsMsg);
      console.log("dishExists" +dishExistsMsg);
      
    }
    //on dish upload form submit
  async function adminMenuSubmit(e){
    e.preventDefault();
    setDishUploadLoading(true);
    //check for dish existence
    let dishExists = await axios.post(URL+"/dishExists",{DishName:e.target[0].value});
    console.log("dishExists : ",dishExists.data.dishExists);
    if(dishExists.data.dishExists){
      setDishUploadLoading(false);
      setDishExistsMsg(true);
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
      setRecentUploadedDishName(e.target[0].value);
      setRecentUploadedDishurl(response.data.url);
      //dish upload
      let dbResponse = await axios.post(URL+"/dishUpload",dish)
      setDishUploadLoading(false);
      setDishUploaded(true);
      //obtaining menulist
      const menuList = await axios.get(URL+"/getMenuItems");
      dispatch(setMenuItems(menuList.data));
    }
  }

  return (
    <div className='d-flex flex-row flex-wrap col-12 adminMenuManagementPageContainer  '>
      <div className='adminMenuManagementUploadSection border-end border-1 border-dark-subtle col-12 col-lg-3'>
        <h4 className='adminNewDishRegisterTitle text-center pt-3'>Register a dish:</h4>
        <form onSubmit={(event)=>{adminMenuSubmit(event)}} className='col-12 p-3 d-flex flex-column gap-3' action="">
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

    <Toaster
    show={DishUploaded} 
    toggleShow={dishUploadToastShow}
    message = "Added into the Database successfully <FaCheck className='mb-1'/>"
    color="success"
    imgURL={recentUploadedDishurl}
    header={recentUploadedDishName}
    />

    <Toaster
    show={dishExistsMsg} 
    toggleShow={dishExistsToastShow}
    message = "dish exists already."
    color="danger"
    imgURL="..."
    header="new notification"
    />
            
</div>
  )
}