import React, { useEffect, useState } from 'react'
import MenuCard from '../MenuCard/MenuCard'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { use } from 'react';
export default function MenuCardsHolder() {
  
  const menuItemsList = useSelector((state)=>state.store.menuItemsList);
 
  
  
    
  return (
    menuItemsList?
    menuItemsList.map((individual,index)=>{
      return <div><MenuCard individual={individual} index={index}/></div>
    })

    :""
     )
}
