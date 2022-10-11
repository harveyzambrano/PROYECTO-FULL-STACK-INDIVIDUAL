const { Router } = require("express");
const { Recipe, Diet,Dbapi} = require("../db");
const { getApiDBRecipes } = require("../controllers/Food.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const name = req.query.name;
    //const AllRecipes = await getApiDBRecipes();
    const AllRecipes = await Dbapi.findAll();
    if (name) {
      let recipeQuery = await AllRecipes.filter((i) =>
        i.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeQuery.length
        ? res.send(recipeQuery)
        : res.status(404).send("No esta la receta");
    } else {
      res.status(200).send(AllRecipes);
    }
  } catch (error) {
    console.log(error + " router.get  ->  routes/Recipe_Name.js");
  }
});

module.exports = router;
