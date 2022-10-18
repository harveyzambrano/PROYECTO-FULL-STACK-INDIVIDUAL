const { Router } = require("express");
const { Recipe, Diet,Dbapi} = require("../db");
const { getApiDBRecipes, DbapiRecipe } = require("../controllers/Food.js");


const router = Router();

router.get("/", async (req, res) => {
  try {
    const name = req.query.name;
    //const todasRecipe = await getApiDBRecipes(); //sponcular
     const todasRecipe = await DbapiRecipe()

    if (name) {
      let recipeQuery = await todasRecipe.filter((i) =>
        i.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeQuery.length
        ? res.send(recipeQuery)
        : res.status(404).send("No esta la receta");
    } else {
      res.status(200).send(todasRecipe);
    }
  } catch (error) {
    console.log(error + " >>> In router/Recipe_Name.js");
  }
});

module.exports = router;
