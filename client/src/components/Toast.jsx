import React, { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import { FaCheck } from "react-icons/fa";

import Toastcontainer from 'react-bootstrap/Toastcontainer'
export default function Toaster({show,toggleShow,imgURL="...",header="",message,color}) {    
    const [view,setView] = useState(show)
    const toggle =()=>{
        setView(false);
        toggleShow();
    }
    useEffect(()=>{
        setView(show)
    },[show])
  return (
    <Toastcontainer
        className="p-3"
        position="bottom-end"
        style={{ zIndex: 1 }}
      >
        <Toast show={view} onClose={toggle} bg={color} delay={3000} autohide>
          <Toast.Header className=''>
            <img height="50px"
              src={imgURL}
              className="rounded me-2"
              alt=""
              />
            <strong className="me-auto">{header}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>
            <div className="text-light fw-bolder">{message}</div>
          </Toast.Body>
        </Toast>
      </Toastcontainer>

  )
}
