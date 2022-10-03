import React from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions/index.js";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards"
import "./Home.css"

function Home (){
    const dispatch = useDispatch()
    function handleClick(e){
        e.preventDefault();
        dispatch(getAllRecipes());
    }
    return(
        <div>
            <Link to = "/recipes"> Create Recipe </Link>
            <h1 className="Title-Home">RECIPES</h1>
            <button onClick={handleClick}>Refresh</button>

            <div>
                <select>
                    <option value="asc">Upward</option>
                    <option value="desc">Falling</option>
                </select>
                <select>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="api">Api</option>
                </select>   

            </div>

            <Cards/>
        


        </div>
    )
}

export default Home;