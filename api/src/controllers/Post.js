const axios = require("axios");
const { Recipe, Diet } = require("../db");

const postRecipes = async (params) => {

    const recipeP = await Recipe.create(params)
    await recipeP.addDiet(params.diets)
    
    const recipeWhere = await Recipe.findOne({
        where:{
            name: recipeP.toJSON().name,
        },
        include: Diet,
    })
    return recipeWhere;
}




module.exports = {
    postRecipes
}