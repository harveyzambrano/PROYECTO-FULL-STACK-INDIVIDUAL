import React from "react";
import './Paginado.css'

export default function Paginado ({recipesPerPage, allRecipes, paginado }){
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i)
    }
    
    
    return(
        <nav className="paginacion">
            <ul className="ul_paginado">                
                { pageNumbers &&
                 pageNumbers.map(number =>(
                    <li className="li_number_pag" key={number}>
                    <a className="a_pag" onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}   
            </ul>
        </nav>
    )
}

