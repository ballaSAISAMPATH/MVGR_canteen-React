import React, { useEffect } from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItems } from './store/UserInfo/store';
export default function App() {
  const dispatch = useDispatch();
  const URL = useSelector((state)=>state.store.serverURL);
  useEffect(()=>{
     axios.get(URL+"/getMenuItems").then((responseList)=>{
       console.log(responseList);
       dispatch(setMenuItems(responseList));
      });
  })
  return (
    <div>
      <LandingPage/>
    </div>
  )
}
