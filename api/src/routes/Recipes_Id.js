const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getRecipesId } = require("../controllers/Food.js");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const ById = await getRecipesId(id);
  res.json(ById);
});

module.exports = router;
