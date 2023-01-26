const axios = require("axios");
const { Recipe, Diet, Dbapi } = require("../db");
const { YOUR_API_KEY } = process.env;
 


//`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`

//*--------------------------------------------------------------------->
const getApiDBRecipes = async () => {
  try {
    const apiRecipe = 
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
      );
    const apiRecipeData = await apiRecipe.data.results.map((r) => {
      return {
        id:r.id,
        name: r.title,
        vegetarian: r.vegetarian,
        vegan: r.vegan,
        glutenFree: r.glutenFree,
        dairyFree: r.dairyFree,
        summary: r.summary.replace(/<[^>]*>?/g, ""),
        image: r.image,
        healthScore: r.healthScore,
        dishTypes: r.dishTypes,
        dietsApi: r.diets,
        steps: i.analyzedInstructions[0]?.steps.map((i) =>"STEP: "+ i.number+"._ " + i.step),     
      };
    });

    const getDataBaseRecipes = await Recipe.findAll({
      include: Diet,
    });

    const concateApiDataBase = [...getDataBaseRecipes, ...apiRecipeData];
    return concateApiDataBase;
  } catch (error) {
    console.log(error + " >>> In controllers Food.js/ getApiDBRecipes()");
  }
};
//*--------------------------------------------------------------------->
const DbapiRecipe = async () => {
  try {
    const AllRecipes = await Dbapi.findAll();
    const Recipeposter = await Recipe.findAll({
      include: Diet,
    });

    const todas = [...AllRecipes, ...Recipeposter];
    return todas;
  } catch (error) {
    console.log(error + " >>> In controllers Food.js/ DbapiRecipe()");
  }
};
//*--------------------------------------------------------------------->
const getRecipesId = async (Id) => {
  try {
    const res = await axios
      .get(
        `https://api.spoonacular.com/recipes/${Id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
      )
      .then(i=> {
        i = i.data;

        let obj = {

          id: i.id,
          image: i.image,
          name: i.title,
          dietsTypes: i.diets?.map((i) => i),
          dishTypes: i.dishTypes.map((i) => i),
          summary: i.summary.replace(/<[^>]*>?/g, ""),
          healthScore: i.healthScore,
          createDB: false,
          steps: i.analyzedInstructions[0]?.steps.map((i) =>"STEAP: "+ i.number+"._ " + i.step),          
        };
        return obj;
      })
      .catch(() => null);

    if (res) {
      //Api
      return res;
    }
    else{
      //DB
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

  } catch (error) {
    console.log(error + " >>> In controllers  Food.js/ getRecipesId()");
  }
};

module.exports = {
  getApiDBRecipes,
  getRecipesId,
  DbapiRecipe,
};




 /* steps: i.analyzedInstructions[0].steps.map((i) => {
          return {
            number: i.number,
            step: i.step,
          };
        }),  */