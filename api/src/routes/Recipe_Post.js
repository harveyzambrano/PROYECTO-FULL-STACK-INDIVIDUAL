const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { PR } = require("../controllers/Post.js");

const router = Router();


router.post("/", async (req, res) => {
  try {
    const resPost = await PR(req.body);
   
      res.status(201).send(resPost);
   
  } catch (error) {
    console.log(error + ">>> routes/Recipe_Post.js");
  }
});

 module.exports = router;
