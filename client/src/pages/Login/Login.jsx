import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router'
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userIDSet,userNameSet,userMailSet,userRollNoSet,userSignupDateSet,setAdminLogged } from '../../store/UserInfo/store';
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const URL=useSelector((state)=>state.store.serverURL)
    const navigate=useNavigate();
    const dispatch=useDispatch();
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    async function AdminLoginPageSubmitted(event){
        event.preventDefault();
        const obj={adminID:event.target[0].value,
            adminPassword:event.target[1].value,
        }
        await axios.post(URL+"/adminLogin",obj).then((response)=>{
            console.log(response.data.adminLogged);
            
            dispatch(setAdminLogged(response.data.adminLogged));
            if(response.data.adminLogged){
                navigate("/adminHome/AdminDashboard");
                document.getElementById("login_page_admin_exists_text").innerHTML=("");
                sessionStorage.setItem("adminExists",response.data.adminLogged);

            }
            else{
                document.getElementById("login_page_admin_exists_text").innerHTML=("<div class='text-danger' >admin not found</div>")
            }
        })
    }
    async function ClientLoginPageSubmitted(e){
    e.preventDefault();
    const obj={rollNo:e.target[0].value,
        password:e.target[1].value,
    }
    await axios.post(URL+"/clientLogin",obj).then((res)=>{
        console.log(res.data);
        if(res.data.userExists){
            document.getElementById("");
            dispatch(userNameSet(res.data.name));
            dispatch(userIDSet(res.data.rollNo));
            dispatch(userMailSet(res.data.mail));
            dispatch(userRollNoSet(res.data.userID));
            dispatch(userSignupDateSet(res.data.date));
            navigate("/clientDashboard");
            sessionStorage.setItem("userName",res.data.name)
            
        }
        else{
            document.getElementById("login_page_user_exists_text").innerHTML=("<div class='text-danger'>account not found!</div>");
            
        }
    })
    }
  return (
    <div className='Login_container '>
        <form onSubmit={(event)=>{ClientLoginPageSubmitted(event)}} className='Login_page_form' action="">
            <h2>LOGIN</h2>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder='rollno' id='loginClientRollno'/>
                <label  htmlFor="loginlientRollno">enter admission number </label>
            </div>
            <div className="form-floating">
                <input type={showPassword?"text":"password"} className="form-control" placeholder='loginClientPassword' id='password'/>
                <label  htmlFor="loginClientPassword">enter password</label>
                <span
                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                >
                    {showPassword ?<BsFillEyeFill/>  :<BsFillEyeSlashFill/>}
                </span>
            </div>
            <div id="login_page_user_exists_text"></div>
            <div>no account ? <Link to={"/signup"}>Signup here.</Link></div>
            <div><Link className=' btn btn-outline-success' to="/">&lt;preview page</Link></div>
            <input type="submit" className='btn btn-primary' />
        </form>
        <form onSubmit={(event)=>{AdminLoginPageSubmitted(event)}} className='Login_page_form Login_page_form_admin' action="">
            <h2>ADMIN LOGIN</h2>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder='rollno' id='loginAdminMail'/>
                <label  htmlFor="loginAdminMail">enter email ID </label>
            </div>
            <div className="form-floating">
                <input type={showPassword?"text":"password"} className="form-control" placeholder='loginAdminPassword' id='password'/>
                <label  htmlFor="loginAdminPassword">enter password</label>
                 <span
                          className="position-absolute top-50 end-0 translate-middle-y me-3"
                          onClick={togglePasswordVisibility}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ?<BsFillEyeFill/>  :<BsFillEyeSlashFill/>}
                </span>    
            </div>
            <div id='login_page_admin_exists_text'>

            </div>
            <input type="submit" className='btn btn-primary' />
        </form>
    </div>
  )
}
