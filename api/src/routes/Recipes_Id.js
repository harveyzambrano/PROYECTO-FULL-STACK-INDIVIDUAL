const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getRecipesId } = require("../controllers/Food.js");

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ById = await getRecipesId(id);
    res.json(ById);
  } catch (error) {
    console.log(error + " router.get(id) ->  routes/Recipe_Id.js");
  }
});

module.exports = router;
