import axios from "axios";
import {
  GET_FOOD,
  TYPE_DIET,
  BY_NAME,
  BY_ORDER,
  BY_SCORE,
  GET_DETAILS,
  POSTER,
  GET_DIETS,
  CLEAR,
  DELETE_RECIPE
} from "./actionTypes";

export const getApi = () => {
  try {
    return async (dispatch) => {
      const gApi = await axios.get("http://localhost:3001/all");
      dispatch({
        type: GET_FOOD,
        payload: gApi.data,
      });
    };
  } catch (error) {
    console.log(error + " >>> In actions/ posterApi()");
  }
};

export const getDietas = () => {
  try {
    return async (dispatch) => {
      const gApi = await axios.get("http://localhost:3001/diets");
      dispatch({
        type: GET_DIETS,
        payload: gApi.data,
      });
    };
  } catch (error) {
    console.log(error + " >>> In actions/ getDietas()");
  }
};

export const DeletePost =(id) =>{
  try {
     return async (dispatch) => {
  var borrando = await axios.get("http://localhost:3001/recipes/" + id)
  return dispatch({
    type: DELETE_RECIPE,
    payload:borrando.data,
  })
 }
  } catch (error) {
    console.log(error + " >>> In actions/ DeletePost()");
  }
 
}


export const typeDiet = (payload) => {
  return {
    type: TYPE_DIET,
    payload,
  };
};

export const byName = (name) => {
  try {
    return async (dispatch) => {
      const porNombre = await axios.get("http://localhost:3001/recipes?name=" + name);
      dispatch({
        type: BY_NAME,
        payload: porNombre.data,
      });
    };
  } catch (error) {
    console.log(error + " >>> In actions/ byName()");   
  }
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

export function posterRecipes(payload) {
  try {
    return async function (dispatch) {
      var post = await axios.post("http://localhost:3001/recipes", payload);
      return dispatch({
        type: POSTER,
        payload: post.data,
      });
    };
  } catch (error) {
    console.log(error + " >>> In actions/ posterRecipes()");
  }
}

export const getDetail = (id) => {
  try {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/recipes/" + id);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error + " >>> In actions/ getDetail()");
  }
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};
