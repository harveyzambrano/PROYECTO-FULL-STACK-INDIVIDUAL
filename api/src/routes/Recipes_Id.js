const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getRecipesId, getDbId} = require("../controllers/Food.js");

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const  id = req.params.id;
    const ById = await getRecipesId(id);
    res.status(200).send(ById)
  } catch (error) {
    console.log(error + " >>> In router/Recipe_Id.js");
  }
});

module.exports = router;
