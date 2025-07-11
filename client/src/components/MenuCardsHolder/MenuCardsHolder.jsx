import React, { useEffect, useState } from 'react'
import MenuCard from '../MenuCard/MenuCard'
import { useSelector } from 'react-redux';
export default function MenuCardsHolder() {
  const [menuItemsList,setMenuItemsList] = useState([]);
  
    
    
  return (
    menuItemsList.map((individual,index)=>{
      return <div><MenuCard individual={individual} key={index}/></div>
    })
  )
}
