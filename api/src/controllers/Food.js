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
      //`https://food-d0a4b-default-rtdb.firebaseio.com/.json`
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data;
  const apiRecipeData = await apiRecipe.results.map((r) => {
    return {
      name: r.title,
      vegetarian: r.vegetarian,
      vegan: r.vegan,
      glutenFree: r.glutenFree,
      dairyFree: r.dairyFree,
      summary: r.summary,
      image: r.image,
      healthScore: r.healthScore,
      dishTypes: r.dishTypes,
      dietsApi: r.diets,
      steps:
        r.analyzedInstructions[0] && r.analyzedInstructions[0].steps
          ? r.analyzedInstructions[0].steps.map((e) => e.step).join(" \n")
          : "",
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
        id: i.id,
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

  if (res) {//Api    
    return res;
  } else {//DB    
    try {
          const recipe = await Recipe.findByPk(Id, {
            include: {
              model: Diet,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
          });
          return recipe;
    } catch {
      return undefined;
   }
  }
};

module.exports = {
  getApiDBRecipes,
  getRecipesId,
  //getDbId
};

// } catch (error) {
//     console.log(error + ",  Error en funcion getAllChar /controlers");
//   }


 