const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getApiDBRecipes } = require("../controllers/Food.js");

const router = Router();

router.get("/", async (req, res) => {
  const apiAll = await getApiDBRecipes();
  res.send(apiAll);
});

module.exports = router;
