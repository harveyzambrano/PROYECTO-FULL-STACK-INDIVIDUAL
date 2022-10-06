import { FILTER_DIETS, GET_ALL_DIETS, GET_ALL_RECIPES, POST_RECIPES } from "../actions/actionTypes.js";

const initialState = {
    recipes: [],
    allRecipes:[],
    dietsTypes:[]
}
function rootReducer(state = initialState, action) {
    switch(action.type){

        case GET_ALL_DIETS:
            return{
                ...state,
            dietsTypes: action.payload
            }        
       case GET_ALL_RECIPES:
            return{
            ...state,
            allRecipes: action.payload,
            recipes: action.payload
            }
        //  case GET_ALL_RECIPES:
        //     const info = action.payload
        //     const res = info.map((i) => {
        //       return {
        //         image: i.image,
        //         name: i.name,
        //         diets:i.diets                
        //         // diets: i.diets? i.diets : i.diets.map(i => i.name),
        //       };
        //     });
        //     return {
        //       ...state,
        //       recipes: res, //payload trae la info que toma en el actions payload: char.data
        //     };

        

        
        case POST_RECIPES:
            return{
                ...state,
            }

        case FILTER_DIETS:
            const allRecipes = state.allRecipes
            const dietFilter = allRecipes.filter(el => el.dietsTypes.name === (action.payload))
            return{
                ...state,
                recipes: dietFilter
            }
            
        default: return state;
    }
}


export default rootReducer;












//case GET_ALL_RECIPES:
        //     const info = action.payload
        //     const res = info.map((i) => {
        //       return {
        //         image: i.image,
        //         name: i.name,                
        //         diets: i.diets? i.diets : i.diets.filter(i => i.name),
        //       };
        //     });
        //     return {
        //       ...state,
        //       recipes: res, //payload trae la info que toma en el actions payload: char.data
        //     };