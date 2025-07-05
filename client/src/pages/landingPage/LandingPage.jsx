import React, { useEffect } from 'react'
import './LandingPage.css'
import { Link } from 'react-router';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useSelector } from 'react-redux';

export default function LandingPage() {
  const websiteLogo=useSelector((state)=>state.store.websiteLogo)
   function landing_page_form(event){
    event.preventDefault();
    const name=event.target[0].value;
    const email=event.target[1].value;
    const complain=event.target[2].value;
    const number=event.target[3].value;
    const obj={name:name,email:email,complain:complain,number:number};
    console.log(obj);
    


  }
  useEffect(() => {
  const elements = document.querySelectorAll('.slide-on-scroll');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            entry.target.dataset.animation || 'slide-in-left'
          );
          observer.unobserve(entry.target);         }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
 
  return (
    <div>

      <div className="fixed-top d-flex flex-wrap flex-column flex-sm-row  justify-content-center nav navbar landing_page_navbar slide-on-scroll hidden" data-animation="slide-in-right">
        <img className='col-lg-1 col-sm-2 my-3 ms-4 col-3' src={websiteLogo} alt="img" width={"110px"} height={"50px"}/>
        <div className='col-12 col-md-10 d-flex flex-wrap flex-row my-3 gap-2  justify-content-center align-items-center align'>

        <a className='landing_navbar_anchor col-5 col-lg-2 col-sm-3 mx-1 ' href="#landingPageAbout"><button className='landing_navbar_button'>about</button></a>
        <a className='landing_navbar_anchor col-5 col-lg-2 col-sm-3 mx-1 ' href="#landingPageBestDishes"><button className='landing_navbar_button'>best dishes</button></a>
        <a className='landing_navbar_anchor col-5 col-lg-2 col-sm-3 mx-1' href="#TESTIMONIALS"><button className='landing_navbar_button'>Testimonials</button></a>
        <a className='landing_navbar_anchor col-5 col-lg-2 col-sm-3 mx-1' href="#Explore"><button className='landing_navbar_button'>Explore</button></a>
        <a className='landing_navbar_anchor col-5 col-lg-2 col-sm-3 mx-1' href="#landing_page_contact_us"><button className='landing_navbar_button'>contact us</button></a>
       <div className="ms-0 ms-lg-5 gap-3" style={{display:"flex"}}>
        <Link className='sign_up_button' to="/signup">SIGN-UP</Link>
       <Link className='sign_up_button' to="/login">LOGIN</Link>
       </div>
        </div>
      </div>
      <div className='landing_page_content'>
        <div className="landingpage_welcome_content slide-on-scroll hidden" data-animation="slide-in-down">
          <div className='mt-5 mt-sm-0 landingpage_welcome_content_textwrapper'>
            <h4>WELCOME TO <i><b>RASOI</b></i></h4><br/>
            Experience the best flavors crafted with passion.<br/>Where every meal feels like home.
          </div>
        </div>
      <h2 id='landingPageAbout' className='landingpage_aboutUs_title'>ABOUT US</h2>
      <div className='landingpage_aboutUs_content d-flex flex-row flex-wrap justify-content-center align-items-center '>
        <div className='col-12 col-lg-7 landingpage_aboutUs_content_text slide-on-scroll hidden'data-animation="slide-in-left">
          Welcome to MVGRCE RASOI, proudly serving culinary excellence since 1990. At RASOI, we go beyond the ordinary href bring you an unforgettable dining experience,
           where India’s timeless recipes are reimagined with a contemporary twist. Each dish on our menu is crafted with the finest ingredients, skillful techniques,
            and a passion for perfection, offering a unique blend of tradition and innovation.
          <br/><br/>
          What sets us apart is our commitment href authenticity and creativity. While other restaurants may focus on routine offerings, RASOI stands out by curating a menu inspired by India’s diverse culinary heritage and infused with flavors from across the globe. Our chefs are storytellers, weaving magic into every dish, from fragrant curries href sizzling grills and signature desserts.
          <br/><br/>
          The cozy yet elegant ambiance at RASOI creates the perfect setting for everything from family gatherings href romantic dinners. Our attentive staff ensures that every moment spent here is special, making us more than just a restaurant—it’s a destination where food, comfort, and happiness come together. Come and discover why RASOI is truly one of a kind.

        </div>
        <img className='col-11 col-lg-4 mx-2 landingpage_aboutUs_content_image slide-on-scroll hidden 'data-animation="slide-in-up" src="images/admin_block.webp" alt="" />
      </div>
      <h2 id='landingPageBestDishes' className='landingpage_aboutUs_title'>BEST DISHES</h2>
      <div className='landing_page_bestDishes_intro'>~ Our best dishes, crafted with care,<br/>
        Flavors to savor, beyond compare.</div>
      <div className='landingpage_bestDishes_content slide-on-scroll hidden' data-animation="slide-in-left">
          <div className='landingpage_bestDishes_images1 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Chicken Biryani<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>A fragrant and flavorful blend of basmati rice, tender chicken, and aromatic spices.</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images2 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Butter-Naan<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Soft and buttery flatbread, freshly baked in a tandoor. The perfect companion to curries and gravies.</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images3 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Fish-curry<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Succulent fish simmered in a rich and spicy coconut-based curry. A coastal favorite that packs a punch of flavor.</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images4 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Dessert<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Indulge in our chef's special desserts, a sweet end to your delightful meal. Crafted with love and premium ingredients</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images5 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Chinese Chowmein<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Stir-fried noodles tossed with fresh vegetables, soy sauce, and your choice of protein. A street food favorite with a savory twist.</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images6 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Chicken Wings<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Crispy and juicy chicken wings coated in a tangy and spicy sauce. A crowd-pleasing appetizer for every occasion.</i>              
              </div>
            </div>
          </div>
          <div className='landingpage_bestDishes_images7 landingpage_bestDishes_images'>
            <div className='landingpage_bestDishes_images_names'>
              <div>
                Schezwan Fried Rice<br/>                
              </div>
              <div className='w-75'>
                <i style={{fontSize:'1.2rem',}}>Fiery and flavorful fried rice infused with bold Schezwan spices. A must-try for spice lovers!</i>              
              </div>
            </div>
          </div>
        </div>   
      <div className='landing_page_testimonials_and_reports d-flex flex-column flex-lg-row'>
        <div className='landing_page_testimonials col-12 col-lg-4'>
          <h2 id='TESTIMONIALS' className='landingpage_aboutUs_title '> CUSTOMER TESTIMONIALS </h2>
        </div>
        <div className='landing_page_reports col-12 col-lg-8'>
        </div>
      </div>
      <footer id='landing_page_contact_us' className=" landing_page_footer d-flex flex-column flex-wrap p-3" >
        <div className='slide-on-scroll hidden landing_page_contact_us'data-animation="slide-in-up">

          <div className='landing_page_contact_us_section1 col-10 col-sm-6 col-lg-3 mx-3'>
            <h5 className='landing_page_contact_us_title'>Contact Us :</h5>
            <form onSubmit={(event)=>{landing_page_form(event)}} className='form-floating' action="">
              <div className="form-floating">
              <input className='form-control' type="text" name='name' id='name' placeholder='name'/>
              <label  htmlFor="name">enter your name</label>
              </div>
              <br />
              
              <div className="form-floating">
              <input className='form-control' type="email" name='email' id='email' placeholder='email'/>
              <label  htmlFor="email">enter your email</label>
              </div>
              <br />

              <div className="form-floating">
              <input className='form-control' type="text" name='complain' id='email' placeholder='complain'/>
              <label  htmlFor="complain">brief your query</label>
              </div>
              <br />

              <div className="d-flex">
                <div className="form-floating col-8">
                  <input className='form-control' type="number" name='number' id='number' placeholder='number'/>
                  <label  htmlFor="name">enter your contact number</label>
                </div>
                <input  type="submit" className='btn btn-primary col-4' />
              </div>
              <br />

              
            </form>
          </div>
          <div className='landing_page_contact_us_section2'>
            <h5 className='landing_page_contact_us_title mb-3' >Quick Links :</h5>
            <div className='d-flex flex-column gap-3'>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/" target='_blank'> MVGRCE home </a>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/committees" target='_blank'> COMMITTEES </a>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/directory" target='_blank'> DIRECTORY </a>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/downloads-section" target='_blank'> Downloads Section </a>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/grievances" target='_blank'> GRIEVANCES </a>
              <a style={{color:"grey",fontWeight:"bold"}} href="https://mvgrce.com/privacy-policy" target='_blank'> PRIVACY POLICY </a>
              <div className='d-flex'>
                <b style={{color:"white"}}>mail us at : </b><i><a href="mailto:saisampath453@gmail.com"> mvgrce@gmail.com</a></i>
              </div>
            </div>
          </div>
          <div className='landing_page_contact_us_section3'>
            <iframe className='landing_page_mvgrce_location_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.245677200651!2d83.40299951125145!3d18.06017798287526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be4c4081c8dbb%3A0x1c634bbcd67ea3bf!2sMaharaj%20Vijayaram%20Gajapathi%20Raj%20College%20of%20Engineering%20(Autonomous)!5e0!3m2!1sen!2sin!4v1750426652740!5m2!1sen!2sin"
             width="300" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='landing_page_contact_us_section4 gap-3'>
             <div>

                MVGR College of Engineering(A),<br />
                Vijayaram Nagar campus, <br />Chintalavalasa, Vizianagaram,<br />
                Andhra Pradesh 535005,<br /><br />
                Contact: 08922 241732/241039 <br />
             </div >
              <div className='landing_page_contact_us_section4_part1'>
                <a  style={{color:"rgb(38, 38, 246)" , fontSize:"2rem"}} target="_blank" href="https://www.linkedin.com/in/mvgrcollege?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
                <a style={{color:"purple" , fontSize:"2rem"}} target="_blank" href="https://www.instagram.com/mvgrcollege?igsh=MTV2Y3VobWtnbG5qNw=="><AiFillInstagram/></a>
              </div>
              <div className='landing_page_contact_us_section4_part2'>
                <a style={{color:"rgb(80, 146, 252)" , fontSize:"2rem"}} target="_blank" href="https://www.facebook.com/MVGRAutonomous"><FaFacebook/></a>
                <a style={{color:"grey" , fontSize:"2rem"}} target="_blank" href="https://x.com/mvgrcollege"><BsTwitterX/></a>
              </div>
          </div>

        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
              <img src= "images/MVGRCElogo.png" className='landing_page_mvgrce_logo' alt="MVGRCE" />
              <div className='' style={{color:"white"}}>@copyright, all rights reserved.(2025)</div>
        </div>
      </footer>
    </div>
  </div>
  )
}

