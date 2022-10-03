import React from 'react';
import {Link} from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage() {
  return(
  <div >
    <h1 className='Title_Welcome'> Welcome to Food</h1>
    <Link to ="/home">      
          <button className="btn-enter">Enter</button>       
    </Link>
  </div>
  )
}
