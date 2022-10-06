import axios from "axios";
import { GET_ALL_RECIPES, GET_ALL_DIETS, POST_RECIPES,FILTER_DIETS } from "./actionTypes"

export function getAllRecipes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/all");
        return dispatch({
            type:GET_ALL_RECIPES,
            payload: json.data
        })        
    }
}
export function getAllDiets(){
    return async function(dispatch){
        var diet = await axios.get("http://localhost:3001/diets")
        return dispatch({
            type: GET_ALL_DIETS,
            payload: diet.data
        })
    }
}

export function posterRecipes (payload) {
    return async function (dispatch){
        var post = await axios.post("http://localhost:3001/recipes",payload)
        return dispatch({
            type: POST_RECIPES,
            payload :post.data
        })
    }
}

export function filterDiets(payload){
    return{
        type:FILTER_DIETS,
        payload
    }
}

