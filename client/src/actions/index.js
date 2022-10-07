import axios from "axios";
import {  GET_ALL_RECIPES, GET_ALL_DIETS, POST_RECIPES,FILTER_DIETS, FILTER_ASC, FILTER_CREATED, GET_RECIPE_DB, FILTER_HEALT_SCORE } from "./actionTypes"

export function getAllRecipes(){
    return async function(dispatch){
        var jsonAll = await axios.get("http://localhost:3001/all");
        return dispatch({
            type:GET_ALL_RECIPES,
            payload: jsonAll.data
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

export function orderByName(payload){
    return{
        type:FILTER_ASC,
        payload
    }
}

 
export function orderByHealth(payload){
    return{
        type:FILTER_HEALT_SCORE,
        payload
    }
}

export function orderByDiet(payload){
    return{
        type:FILTER_DIETS,
        payload
    }
}



















// export function filterByCreated (payload){
//     return{
//         type: FILTER_CREATED,
//         payload
//     }
// }
