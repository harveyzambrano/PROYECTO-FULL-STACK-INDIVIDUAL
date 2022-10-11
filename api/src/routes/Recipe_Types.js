const { Router } = require("express");
const { Diet } = require("../db");
const {getTypes} =require("../controllers/TypeDiets.js");

const router = Router();

router.get("/",async(req,res) => {
    const typeDiet = await getTypes()
    res.send(typeDiet)
})

module.exports = router;