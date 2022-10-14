import React from "react";
import s from './Paginado.module.css'

export function Paginado ({recipesPerPage, allRecipes, paginado }){
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i)
    }
    
    
    return(
        <nav className={s.paginado}>
            <ul >                
                { pageNumbers &&
                 pageNumbers.map(number =>(
                    <li  key={number}>
                    <a href="#" className={s.active} onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}   
            </ul>
        </nav>
    )
}

