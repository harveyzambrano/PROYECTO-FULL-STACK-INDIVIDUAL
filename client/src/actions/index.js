import axios from "axios";
import { GET_ALL_RECIPES } from "./actionTypes"

export function getAllRecipes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/all",{});
        return dispatch({
            type:GET_ALL_RECIPES,
            payload: json.data
        })        
    }
}



//  module.export = {
//      getAllRecipes
// }