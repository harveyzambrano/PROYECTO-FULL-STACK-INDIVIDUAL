 
 import axios from "axios";
 import {
   GET_FOOD,
   TYPE_DIET,
   BY_NAME,
   BY_ORDER,
   BY_SCORE,
   GET_DETAILS,
   POSTER,
   GET_DIETS
 } from "./actionTypes";
 
 export const getApi = () => {
   return async (dispatch) => {
     const gApi = await axios.get("http://localhost:3001/all");
     dispatch({
       type: GET_FOOD,
       payload: gApi.data,
     });
   };
 };
 
 export const getDietas = () => {
  return async (dispatch) => {
    const gApi = await axios.get("http://localhost:3001/diets");
    dispatch({
      type: GET_DIETS,
      payload: gApi.data,
    });
  };
};

 export const typeDiet = (payload) => {
   return {
     type: TYPE_DIET,
     payload,
   };
 };
 
 export const byName = (payload) => {
   return {
     type: BY_NAME,
     payload,
   };
 };
 
 export const byOrder = (payload) => {
   return {
     type: BY_ORDER,
     payload,
   };
 };
 
 export const byHealthScore = (payload) => {
   return {
     type: BY_SCORE,
     payload,
   };
 };

 export function posterRecipes (payload) {
  return async function (dispatch){
      var post = await axios.post("http://localhost:3001/recipes",payload)
      return dispatch({
          type: POSTER,
          payload :post.data
      })
  }
}

 export const getDetail = (id) => {
  return async function(dispatch){
    try {
      var json = await axios.get("http://localhost:3001/recipes/" + id)
      return dispatch({
        type: GET_DETAILS,
        payload: json.data
      })
    } catch (error) {
      console.log(error + "  En action GET_DETAILS")
    }
  }
 }
 