const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { postRecipes } = require("../controllers/Post.js");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const resPost = await postRecipes(req.body);
    if (resPost) {
      res.status(201).send(resPost);
    } else {
      res.status(400).send("Recipe already exists");
    }
  } catch (error) {
    console.log(error + " router.post  ->  routes/Recipe_Post.js");
  }
});

module.exports = router;
