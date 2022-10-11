 import {
  GET_FOOD,
  TYPE_DIET,
  BY_NAME,
  BY_ORDER,
  BY_SCORE,
  GET_DETAILS,
  GET_DIETS
} from "../actions/actionTypes";

const initialState = {
  recipes: [],
  tipeDiet: [],
  dietasForm:[],//form
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
    case TYPE_DIET:
      const tDietAll = state.tipeDiet;
      const typeD =
        action.payload === "all"
          ? tDietAll
         /*  : tDietAll.filter((e) => e.dietsApi.includes(action.payload)); */
        : tDietAll.filter((e) => e.dietsApi? e.dietsApi.includes(action.payload): e.diets.find(i => i.name === action.payload)) 
      return {
        ...state,
        recipes: typeD,
      };
    case BY_NAME:
      const nameRecipe = state.name;
      const nReci = nameRecipe.filter((e) => e.name === action.payload);
      return {
        ...state,
        recipes: nReci,
      };
    case BY_ORDER:
      const orderRecipes =
        action.payload === "Asc"
          ? state.recipes.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.recipes.sort((a, b) => (a.name > b.name ? -1 : 1));
      return {
        ...state,
        recipes: orderRecipes,
      };
    case BY_SCORE:
      const orderScore =
        action.payload === "Max"
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
    default:
      return state;

      case GET_DETAILS:
        return{
          ...state,
          detail:action.payload
        }
  }
}
