// import React from "react";
// import './Card.css'




export default function Card({ image, name, diets }) {  
    return (
        <div className="card-container">
            <div>
                <h2 className="card-title">{name}</h2>            
            </div>
            <div>
                <img className="image-container"  src={image} alt="Not found"/>
            </div>
            
            <div className="dietcointainer">
               <a className="a_Diets">Diets</a>
                {diets?.map(e => {
                    return (
                    
                    <h5 className="h_diets" ><a className="a_diets">{e}</a></h5>
                    )
                })}            
            </div>
            
        </div>
    )
};

