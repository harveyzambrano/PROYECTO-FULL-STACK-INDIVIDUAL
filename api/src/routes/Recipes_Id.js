const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getRecipesId, getDbId} = require("../controllers/Food.js");

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const  id = req.params.id;
    
    
    if (id) {
      const ById = await getRecipesId(id);
      if (ById) {
        res.status(200).send(ById)        
      }else{
        res.status(404).send("No existe id")
      }
    }

    
  } catch (error) {
    console.log(error + " >>> In router/Recipe_Id.js");
  }
});

module.exports = router;
