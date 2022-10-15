import React from 'react';
import {Link} from 'react-router-dom'; 
import "./LandingPage.css"
import style from "../LandingPage/ladingFondo.module.css"

export default function LandingPage() {
  return(
  <div className={style.imagenfondo}>
   
     {/* <h1 className="Tittle_Henry">Henry Food</h1>  */}

    <h1 className='Title_Welcome'> Welcome to Food Recipes</h1>
    <div className="btn-enter">
      <Link to ="/recipes">      
          <button className='btn-enter'>Enter</button>       
      </Link>
    </div>
   
  </div>
  )
}
