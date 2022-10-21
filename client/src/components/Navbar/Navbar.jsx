import React from "react"; 
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
   <div>
        <nav className="navbar">
            <a><NavLink to = "/">o</NavLink></a>  
            <a><NavLink to = "/recipes"> Home </NavLink></a>               
            <a><NavLink to = "/form"> Create Recipe </NavLink></a>
        </nav>
   </div>  
    
  );
}

export default Navbar;
