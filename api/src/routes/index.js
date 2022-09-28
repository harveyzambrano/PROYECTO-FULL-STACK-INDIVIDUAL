const { Router } = require("express");
const All = require("./Recipes_All.js");
const NameQuery = require("./Recipes_Name.js");
const IdParam = require("./Recipes_Id.js");
const recipePost = require("./Recipe_Post")
const dietTypes = require("./Recipe_Types")

const router = Router();

router.use("/all", All);
router.use("/recipes", NameQuery);
router.use("/recipes", IdParam);
router.use("/recipes",recipePost);
router.use("/diets",dietTypes);

module.exports = router;
