import React, { useEffect, useState } from 'react'
import MenuCard from '../MenuCard/MenuCard'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { use } from 'react';
export default function MenuCardsHolder({handleDishDelete,}) {
  const menuItemsList = useSelector((state)=>state.store.menuItemsList);

  if(menuItemsList.length==0){
    return <h3 className="col-12 d-flex align-items-center justify-content-center">no Dishes added yet.</h3>
  }
  else{
    return (
      menuItemsList?
      menuItemsList.map((individual,index)=>{
        
        return <div key={individual._id}>
          <MenuCard 
            handleDishDelete={handleDishDelete} 
            individual={individual}
            index={index}/></div>
      })
      :""
      
    )
  }
}
  