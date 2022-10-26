 import {
  GET_FOOD,
  TYPE_DIET,
  BY_NAME,
  BY_ORDER,
  BY_SCORE,
  GET_DETAILS,
  GET_DIETS,
  CLEAR,
  DELETE_RECIPE
} from "../actions/actionTypes";

const initialState = {
  recipes: [],
  tipeDiet: [],
  dietasForm:[],//sleccion dietas
  allrecipes:[], // paginado
  name: [],
  detail:[]
};
 
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        recipes: action.payload,
        allrecipes: action.payload,
        tipeDiet: action.payload,
        name: action.payload,       
      };
      case GET_DIETS:
      return {
        ...state,
        dietasForm: action.payload,
             
      };

      case DELETE_RECIPE:
        return{
          ...state,
          recipes:action.payload
        }

    case  TYPE_DIET:
      const stadoDiets = state.tipeDiet;
      const filterDiets = action.payload === "all"? stadoDiets : stadoDiets.filter(e => e.dietsApi? e.dietsApi.includes(action.payload): e.diets.find(i => i.name === action.payload))
    return{
      ...state,
      recipes: filterDiets
    }
  /* case TYPE_DIET:
  const tDietAll = state.tipeDiet;
  const typeD = action.payload === "all"?tDietAll: tDietAll.filter((e) => e.dietsApi? e.dietsApi.includes(action.payload): e.diets.find(i => i.name === action.payload)) 
  return {
    ...state,
    recipes: typeD,
  };
 */

    case BY_NAME:      
      return {
        ...state,
        recipes: action.payload,
      };



    case BY_ORDER:
      const orderRecipes = action.payload === "Asc"
          ? state.recipes.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.recipes.sort((a, b) => (a.name > b.name ? -1 : 1));
      return {
        ...state,
        recipes: orderRecipes,
      };
    case BY_SCORE:
      const orderScore = action.payload === "Max"
          ? state.recipes.sort((a, b) =>
              a.healthScore > b.healthScore ? -1 : 1
            )
          : state.recipes.sort((a, b) =>
              a.healthScore > b.healthScore ? 1 : -1
            );
      return {
        ...state,
        recipes: orderScore,
      };
   
      case GET_DETAILS:
        return{
          ...state,
          detail:action.payload
        }

      case CLEAR:
        return{
          ...state,
          detail: []
        }

       default:
      return state;
  }
}




