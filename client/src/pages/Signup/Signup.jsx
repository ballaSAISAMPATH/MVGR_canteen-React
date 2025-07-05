import React, { useEffect, useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router'
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Signup() {
  const [userExists,setUserExists]=useState(false);
  const URL=useSelector((state)=>state.store.serverURL)
  const navigate = useNavigate();
  useEffect(()=>{
    if(userExists){            
          document.getElementById("signup_user_exists_warning_text").innerHTML=("<div class='text-danger'>Account already exists!")
          document.getElementById("signup_submit_button").innerHTML=("<input type='submit' disabled class='btn btn-secondary' />")
        }
        else{
          document.getElementById("signup_user_exists_warning_text").innerHTML=("<div class='text-success'>Account created</div>")
          document.getElementById("signup_submit_button").innerHTML=("<input type='submit' class='btn btn-outline-primary' />")
          
        }
  },[userExists]);
  async function signupFormSubmitted(e){
    e.preventDefault();
    const obj ={ 
      name:e.target[0].value.toUpperCase(),
      mail:e.target[1].value.replace(/\s+/g, ""),
      rollNo:e.target[2].value.toUpperCase().replace(/\s+/g, ""),
      password:e.target[3].value.toUpperCase(),
    }
    console.log(obj);
    try{

      let res = await axios.post(URL+"/signup/",obj)
      console.log(res.data.userExists);
      setUserExists(res.data.userExists)
      if(!res.data.userExists){          
        navigate('/login')
      }
    }
    catch(err){
      console.log(err);
      
    }
    
          
  }
  function AdmissionNumberChanged(event){
    document.getElementById("signup_submit_button").innerHTML=("<input type='submit' class='btn btn-outline-primary' />")
      document.getElementById("signup_user_exists_warning_text").innerHTML=("")

  }
  function confirmPasswordChange(e){
    e.preventDefault();
    if (e.target.value !== document.getElementById("signupPassword").value){
      document.getElementById("signup_submit_button").innerHTML=("<input type='submit' disabled class='btn btn-secondary' />")
      document.getElementById("signup_confirm_password_warning_text").innerHTML=("<div class='text-danger'>password and confirm password doesn't match</div>")
      
    }
    else{
      document.getElementById("signup_submit_button").innerHTML=("<input type='submit' class='btn btn-outline-primary' />")
      document.getElementById("signup_confirm_password_warning_text").innerHTML=("")

    }
  }
  function PasswordChange(e){
    e.preventDefault();
    if (e.target.value !== document.getElementById("signupConfirmPassword").value){
      document.getElementById("signup_submit_button").innerHTML=("<input type='submit' disabled class='btn btn-secondary' />")
      document.getElementById("signup_confirm_password_warning_text").innerHTML=("<div class='text-danger'>password and confirm password doesn't match</div>")
      
    }
    else{
      document.getElementById("signup_submit_button").innerHTML=("<input type='submit' class='btn btn-outline-primary' />")
      document.getElementById("signup_confirm_password_warning_text").innerHTML=("")

    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='signup_container'>
        <form onSubmit={(event)=>{signupFormSubmitted(event)}} className='signup_page_form' action="">
            <h2>SIGNUP <BsPersonPlusFill className=' mb-2'/></h2>
            
            <div className="form-floating">
                <input type="text" className="form-control" placeholder='SignupName' id='SignupName'required/>
                <label  htmlFor="SignupName">Enter name</label>
            </div>
            <div className="form-floating">
                <input onChange={(event)=>{AdmissionNumberChanged(event)}} type="email" className="form-control" placeholder='mail' id='SignupMail'required/>
                <label  htmlFor="SignupMail">Enter valid mailID</label>
            </div>
            <div className="form-floating">
                <input onChange={(event)=>{AdmissionNumberChanged(event)}} type="text" className="form-control" placeholder='signupRollno' id='signupRollno' required/>
                <label  htmlFor="signupRollno">Enter admission number </label>
            </div>
             <div>
              <div className="form-floating position-relative">
                <input
                  onChange={(event) => {
                    PasswordChange(event);
                  }}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="password"
                  id="signupPassword"
                  required
                />
                <label htmlFor="signupPassword">Enter password</label>
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                </span>
              </div>

              <div className="form-floating position-relative mt-3">
                <input
                  onChange={(event) => {
                    confirmPasswordChange(event);
                  }}
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="confirmPassword"
                  id="signupConfirmPassword"
                  required
                />
                <label htmlFor="signupConfirmPassword">Confirm password</label>
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showConfirmPassword ?<BsFillEyeFill/>  :<BsFillEyeSlashFill/>}
                </span>
              </div>
            </div>
            <div id='signup_confirm_password_warning_text'></div>
            <div id='signup_user_exists_warning_text'></div>
            <div>already signed up? <Link  to={"/login"}>Login here.</Link></div>
            <div><Link className=' btn btn-outline-success' to="/">&lt;preview page</Link></div>
            <div id="signup_submit_button"  >
              <input type="submit" className='btn btn-primary' />
            </div>
        </form>
    </div>
  )
}
