import React from "react";
import './Card.css'



let Id = 1;

export default function Card({ image, name, dietsTypes }) {  
    return (
        <div className="Card_Individual">
            <div>
                <h2 className="Tittle-Recipe">{name}</h2>            
            </div>
            <div>
                <img className="Img-Recipe"  src={image} alt="Not found"/>
            </div>
            
            <div className="dietcointainer">
               <a className="a_Diets">Diets</a>
                {dietsTypes?.map(e => {
                    return (
                    
                        <h5 className="h_diets" key={Id++}><a className="a_diets">{e}</a></h5>
                    )
                })}            
            </div>
            
        </div>
    )
};

