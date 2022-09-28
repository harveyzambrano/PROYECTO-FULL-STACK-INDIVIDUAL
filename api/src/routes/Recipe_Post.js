const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const {postRecipes} = require("../controllers/Post.js")

const router = Router();

router.post("/",async(req,res) => {
    const resPost = await postRecipes(req.body)
    res.send(resPost)
})

module.exports = router;