const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { YOUR_API_KEY } = process.env;
//const food = require("../../foodComplexSearch.json");

// `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true`
//  &addRecipeInformation=true&number=100


//*--------------------------------------------------------------------->
const getApiDBRecipes = async () => {
  const apiRecipe = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data;
  const apiRecipeData = await apiRecipe.results.map((i) => {
    return {
      ID: i.id,
      image: i.image,
      name: i.title,
      diets: i.diets,
      summary: i.summary,
      healthScore: i.healthScore,
      steps: i.analyzedInstructions[0]?.steps.map((i) => {
        return {
          number: i.number,
          step: i.step,
        };
      }),
      createDB: false,
    };
  });

  const getDataBaseRecipes = await Recipe.findAll({
    include: {
      model: Diet,
      attribute: ["name"],
      through: { attributes: [] },
    },
  });

  const concateApiDataBase = [...apiRecipeData, ...getDataBaseRecipes];
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
        diets: i.diets,
        summary: i.summary,
        healthScore: i.healthScore,
        steps: i.analyzedInstructions[0]?.steps.map((i) => {
          return {
            number: i.number,
            step: i.step,
          };
        }),
        createDB: false,
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
