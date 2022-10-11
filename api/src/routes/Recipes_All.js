 
const { Router } = require("express");
const { Recipe, Diet, Dbapi } = require("../db");
const { getApiDBRecipes } = require("../controllers/Food.js");
const {PR }= require("../controllers/Post")

const router = Router();




router.get("/", async (req, res) => {
   const poster = await Recipe.findAll({
    include:  Diet,    
  });
  const api =   await Dbapi.findAll();

  const concateno = [ ...api,...poster]
  res.send(concateno);
});


// router.get("/", async (req, res) => {
//   const apiAll = await getApiDBRecipes();
//   res.send(apiAll);
// });


module.exports = router;
