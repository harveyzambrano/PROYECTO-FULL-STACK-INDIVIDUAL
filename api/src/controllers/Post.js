const axios = require("axios");
const { Recipe, Diet } = require("../db");

const postRecipes = async (params) => {
  try {
    const exist = await Recipe.findOne({
      where: {
        name: params.name,
      },
      include: Diet,
    });
    if (exist) {
      return null;
    } else {
      const recipeP = await Recipe.create(params);
      await recipeP.addDiet(params.diets);

      const recipeWhere = await Recipe.findOne({
        where: {
          name: recipeP.toJSON().name,
        },
        include: Diet,
      });
      return recipeWhere;
    }
  } catch (error) {
    console.log(error + " Funcion Post  ->  /controllers/Post.js");
  }
};

module.exports = {
  postRecipes,
};
