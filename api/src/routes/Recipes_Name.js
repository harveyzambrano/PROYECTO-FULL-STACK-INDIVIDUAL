const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getApiDBRecipes} = require("../controllers/Food.js");

const router = Router();

router.get("/", async (req, res) => {
    const name = req.query.name;
    const AllRecipes = await getApiDBRecipes()
    if (name) {
      let recipeQuery = await AllRecipes.filter((i) =>
        i.name.toLowerCase().includes(name.toLowerCase()));
      recipeQuery.length
        ? res.send(recipeQuery)
        : res.status(404).send("No esta la receta");
    } else {
      res.status(200).send("Toca todas xD");
    }
  });
  
  
module.exports = router;