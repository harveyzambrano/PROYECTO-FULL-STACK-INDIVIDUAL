const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { YOUR_API_KEY } = process.env;
//const food = require("../../foodComplexSearch.json");

//`https://food-d0a4b-default-rtdb.firebaseio.com/.json`
//`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`

//*--------------------------------------------------------------------->
const getApiDBRecipes = async () => {
  const apiRecipe = (
    await axios.get(
      `https://food-d0a4b-default-rtdb.firebaseio.com/.json`
      //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data;
  const apiRecipeData = await apiRecipe.results.map((i) => {
    return {
      ID: i.id,
      image: i.image,
      name: i.title,
      dietsTypes: i.diets?.map(i => i),
      summary: i.summary,
      healthScore: i.healthScore,
      // steps: i.analyzedInstructions[0]?.steps.map((i) => {
      //   return {
      //     number: i.number,
      //     step: i.step,
      //   };
      // }),
      createDB: false,
    };
  });

  const getDataBaseRecipes = await Recipe.findAll({
    include:  Diet,    
  });

  const concateApiDataBase = [ ...getDataBaseRecipes,...apiRecipeData];
  return concateApiDataBase;
};

//*--------------------------------------------------------------------->
const getRecipesId = async (Id) => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/${Id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
    .then((i) => {
      i = i.data;
      let obj = {
        ID: i.id,
        image: i.image,
        name: i.title,
        dietsTypes: i.diets?.map(i => i),
        summary: i.summary,
        healthScore: i.healthScore,
        createDB: false,
        steps: i.analyzedInstructions[0]?.steps.map((i) => {
          return {
            number: i.number,
            step: i.step,
          };
        }),
        
      };
      return obj;
    })
    .catch(() => null);

  if (res) {
    //Api
    return res;
  } else {
    //DB
    const food = await Recipe.findAll({
      where: {
        name: Id,
      },
      inclide: Diet,
    });

    if (food.length) {
      return food;
    } else {
      return null;
    }
  }
};

module.exports = {
  getApiDBRecipes,
  getRecipesId
};

// } catch (error) {
//     console.log(error + ",  Error en funcion getAllChar /controlers");
//   }
