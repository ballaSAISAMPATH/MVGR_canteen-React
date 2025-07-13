import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./MenuCard.css"
export default function MenuCard({ individual }) {
  const isAvailable = individual.Available !== false;
  const [dishTypeColor,setDishTypeColor]=useState("");
  
   useEffect(() => {
    switch (individual.DishType) {
      case "Appetizers":
        setDishTypeColor("#6f42c1"); 
        break;
      case "Main Course":
        setDishTypeColor("#dc3545"); 
        break;
      case "Side Dishes":
        setDishTypeColor("#198754");
        break;
      case "Desserts":
        setDishTypeColor("#2950fdff");
        break;
      case "Beverages":
        setDishTypeColor("#693a01ff");
        break;
      default:
        setDishTypeColor("#6c757d"); 
    }
  }, [individual.DishType]);
return (
  <div className=''>
    <div
        className="card border-0 m-2 menuItemCard"
        style={{
        width: '20rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#ecececff',
        }}
        >
      <div style={{ position: 'relative' }}>
        <img
          src={individual.DishImageURL}
          alt={individual.DishName}
          className="img-fluid"
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />

        <span
          className="badge position-absolute top-0 start-0 m-2 px-3 py-1"
          style={{ fontSize: '0.75rem', borderRadius: '0.5rem',backgroundColor:dishTypeColor }}
        >
          {individual.DishType}
        </span>

        <span
          className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-3 py-1"
          style={{
            fontSize: '0.75rem',
            borderRadius: '0.5rem',
            fontWeight: '500',
          }}
        >
          ⭐ {individual.DishRating}
        </span>
      </div>

      <div className="d-flex justify-content-between align-items-center px-3 pt-3">
        <span className="fw-semibold text-success" style={{ fontSize: '1.1rem' }}>
          ₹{individual.DishPrice}
        </span>
        <span
          className={`badge ${
            isAvailable ? 'bg-success' : 'bg-danger'
          } text-light px-3 py-1`}
          style={{ fontSize: '0.75rem', borderRadius: '0.5rem' }}
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </span>
      </div>

      <div className="card-body px-4 pt-2 pb-3">
        <h5 className="text-center fw-bold mb-2">{individual.DishName}</h5>
        <p
          className="text-muted text-center mb-3"
          style={{ fontSize: '0.9rem', minHeight: '40px' }}
        >
          {individual.DishDescription}
        </p>
          {sessionStorage.getItem("adminExists")
          ?
            <div className="d-flex justify-content-start gap-2">
              <button className="btn btn-warning w-25 rounded-pill fw-medium">
               <FaEdit/>
              </button>
              <button className="btn btn-outline-danger w-25 rounded-pill fw-medium">
                <RiDeleteBin6Fill/>
              </button>
              {isAvailable?
                <button className="btn btn-outline-secondary w-50 rounded-pill fw-medium">
                  unstage
                </button>
              
              :
                <button className="btn btn-outline-primary w-50 rounded-pill fw-medium">
                  stage
                </button>
              }
            </div>
          
          :
            <div className="d-flex justify-content-between gap-2">
              <button className="btn btn-outline-warning w-50 rounded-pill fw-medium">
                Add to Cart
              </button>
              <button className="btn btn-primary w-50 rounded-pill fw-medium">
                Order Now
              </button>
            </div>


          }


      </div>
    </div>

    
  </div>
   




  );
}
