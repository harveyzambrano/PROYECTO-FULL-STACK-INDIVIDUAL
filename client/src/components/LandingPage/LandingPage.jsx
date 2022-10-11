import React from 'react';
import {Link} from 'react-router-dom';
import imagenFondo from '../../Media/landing.jpg'
import "./LandingPage.css"

export default function LandingPage() {
  return(
  <div>
   
    <h1 className="Tittle_Henry">Henry Food</h1> 
    {/* <img className='imagen-fondo' src={imagenFondo}/> */}
    <h1 className='Title_Welcome'> Welcome to Food Recipes</h1>
    <Link to ="/recipes">      
          <button className="btn-enter">Enter</button>       
    </Link>
  </div>
  )
}
