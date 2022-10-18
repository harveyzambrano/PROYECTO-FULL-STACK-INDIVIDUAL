const { Router } = require("express");
const { Recipe, Diet, Dbapi } = require("../db");
const { getApiDBRecipes } = require("../controllers/Food.js");
const { PR } = require("../controllers/Post");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const poster = await Recipe.findAll({
      include: Diet,
    });
    const api = await Dbapi.findAll();

    const concateno = [...api, ...poster];
    res.send(concateno);
  } catch (error) {
    console.log(error + " >>> In router/Recipes_All.js");
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const apiAll = await getApiDBRecipes();
//     res.send(apiAll);
//   } catch (error) {
//     console.log(error + " >>> In router/Recipes_All.js");
//   }
// });

module.exports = router;
