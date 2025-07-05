import React from 'react'
import { NavLink, Outlet } from 'react-router'
import "./AdminHome.css"
export default function AdminHome() {
  return (
    <div>
      <nav className='adminHomeNav d-flex flex-column gap-2 flex-md-row col-12 justify-content-center align-items-center'>
        <img className='adminHomeLogo col-3 col-md-2 col-lg-1 me-0 me-md-5' src="/images/rasoiii.png" alt="" />
        <div className="col-lg-1"></div>
        <NavLink className={({ isActive}) =>
        isActive ? "adminNavActive text-center col-12 col-md-2 adminHomeNavLink" : "text-center col-12 col-md-2 adminHomeNavLink"
        } to="/adminHome/AdminDashboard">Dashboard</NavLink>
        <NavLink className={({ isActive}) =>
        isActive ? "adminNavActive text-center col-12 col-md-2 adminHomeNavLink" : "text-center col-12 col-md-2 adminHomeNavLink"
        } to="/adminHome/AdminMenuManagement">Menu Management</NavLink>
        <NavLink className={({ isActive}) =>
        isActive ? "adminNavActive text-center col-12 col-md-2 adminHomeNavLink" : "text-center col-12 col-md-2 adminHomeNavLink"
        } to="/adminHome/AdminOrderManagement">Orders</NavLink>
        <NavLink className={({ isActive}) =>
        isActive ? "adminNavActive text-center col-12 col-md-2 adminHomeNavLink" : "text-center col-12 col-md-2 adminHomeNavLink"
        } to="/adminHome/AdminFeedbackManagement">Feedback and Reviews</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}
