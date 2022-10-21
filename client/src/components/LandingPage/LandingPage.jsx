import React from 'react';
import {Link} from 'react-router-dom'; 
import "./LandingPage.css"
import style from "../LandingPage/ladingFondo.module.css"

export default function LandingPage() {
  return(
  <div  src='../../Media/fondoHome.jpg' className='imgL'>
    
     {/* <h1 className="Tittle_Henry">Henry Food</h1>  */}
    <div className='Landing'>
    <h1 className='Title_Welcome' >Food Recipes</h1>
   
    </div>
    <div >
      <Link  to ="/recipes">      
          <button className='btn-enter'>Enter</button>       
      </Link>
    </div>
    <div className='imgg'></div>
  </div>
  )
}
