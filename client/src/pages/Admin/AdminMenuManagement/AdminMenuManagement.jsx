import React from 'react'
import axios from "axios"
export default function AdminMenuManagement() {
  async function adminMenuSubmit(e){
    e.preventDefault();
    let file=e.target[4].files[0];
    if (!file) return;
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "menu_images");         
    form.append("folder", "dishes");         
    let response = await axios.post("https://api.cloudinary.com/v1_1/dl0zg9wq3/image/upload",form);
    console.log(response);
    
    let dish={
      dishName:e.target[0].value,
      dishType:e.target[1].value,
      DishPrice:e.target[2].value,
      DishDescription:e.target[3].value,
      DishImageURL:response.data.url,
    }
    console.log(dish);
  }
  return (
    <div>
      <div className='adminMenuManagementUploadSection'>
        <h4>Register a dish:</h4>
        <form onSubmit={(event)=>{adminMenuSubmit(event)}} className='col-11 col-md-3 p-5' action="">
          <div className='form-floating'>
            <input type="text" className="form-control" id='DishName' placeholder="Dish Name"/>
            <label htmlFor="DishName">dish name</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>select dish type</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Side Dishes">Side Dishes</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
          <div className='form-floating'>
            <input type="number" className="form-control" id='DishPrice' placeholder="Dish Price"/>
            <label htmlFor="DishPrice">dish Price</label>
          </div>
          <div className='form-floating'>
            <input type="text" className="form-control" id='DishDescription' placeholder="Dish Description"/>
            <label htmlFor="DishDescription">dish Description</label>
          </div>
          <div className='form-floating'>
            <input type="file" className="form-control" id='DishImage' placeholder="Dish Image"/>
            <label htmlFor="DishImage">upload dish image</label>
          </div> 
          <input type="submit" className="btn btn-primary"/>   
        </form>
      </div>
    </div>
  )
}