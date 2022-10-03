import React from "react";
import './Card.css'

export default function Card({image,name,diets}){
    return (
        <div className="Card_Individual">
            <h3 className="Tittle-Recipe">{name}</h3>
            <img className="Img-Recipe" src={image} alt="img not found"/>
            <h3>Diet</h3>
            <h4>{diets}</h4>
        </div>
    )
}