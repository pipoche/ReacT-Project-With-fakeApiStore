import React from "react";
import {NavLink } from "react-router-dom";
import "./navbar.style.scss";
function Header() {
  
  return (
    <nav className="navbar">
      <div className="navbar_brand">DEV201</div>
      <ul className="navbar_list">
        <li> <NavLink to="/" className="list_item ">Home</NavLink></li>
        <li> <NavLink to="/contact-us" className="list_item ">Contact</NavLink></li>
        <li> <NavLink to="/shop" className="list_item ">Shop</NavLink></li>
        <li> <NavLink to="/Signin" className="list_item ">Signin</NavLink></li>
        <li> <NavLink to="/SIGNUP" className="list_item ">SignUp</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;
