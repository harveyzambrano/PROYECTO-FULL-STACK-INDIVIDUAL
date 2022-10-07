import {
  FILTER_HEALT_SCORE,
  GET_ALL_DIETS,
  GET_ALL_RECIPES,
  POST_RECIPES,
  FILTER_DIETS,
  FILTER_ASC,
} from "../actions/actionTypes.js";

const initialState = {
  recipes: [],
  dietsTypes: [],
  copyRecipes:[]
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DIETS:
      return {
        ...state,
        dietsTypes: action.payload,
      };
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipe:action.payload
      };

    case POST_RECIPES:
      return {
        ...state,
      };

    case FILTER_ASC:
      let sortedArr =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArr,
      };

    case FILTER_HEALT_SCORE:
      let sortedHealt =
        action.payload === "ascH"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedHealt,
      };

    case FILTER_DIETS:
        const recipesDiet = state.copyRecipes
        const dietFiltered = action.payload === " " ? recipesDiet : recipesDiet.filter(recipe => {
                let diet = recipe.diets.map(d => d.name)
            
                if (diet.includes(action.payload)){
                    
                    return recipe
                }
                return null
            })  
        return {
            ...state,
            allRecipes: dietFiltered
        }
    default:
      return state;
  }
}
export default rootReducer;

// case FILTER_CREATED:
//     let recipeCreateds = state.recipes;
//     let acpay = action.payload ==="created"?
//      recipeCreateds.filter(i => i.createDB === true )
//     :recipeCreateds.filter(i => i.createDB === false )
//     return{
//         ...state,
//         recipes: acpay
//     }
