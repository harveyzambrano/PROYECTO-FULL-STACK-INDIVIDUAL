const axios =require("axios")
const { Router } = require("express");
const All = require("./Recipes_All.js");
const NameQuery = require("./Recipes_Name.js");
const IdParam = require("./Recipes_Id.js");
const recipePost = require("./Recipe_Post")
const dietTypes = require("./Recipe_Types")
const {Dbapi} = require("../db")
const { YOUR_API_KEY } = process.env;
const router = Router();

//~------------------------------------------------
router.get("/dbapi", async (req, res) => {
    
      const getApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
      );
  
      const gApi = getApi.data.results.map((r) => {
        return {
          name: r.title,
          vegetarian: r.vegetarian,
          vegan: r.vegan,
          glutenFree: r.glutenFree,
          dairyFree: r.dairyFree,
          summary: r.summary,
          image: r.image,
          healthScore: r.healthScore,
          dishTypes: r.dishTypes,
          dietsApi: r.diets,
          steps:
            r.analyzedInstructions[0] && r.analyzedInstructions[0].steps
              ? r.analyzedInstructions[0].steps.map((e) => e.step).join(" \n")
              : "",
        };
      });
  
      await Dbapi.bulkCreate(gApi);
  
      //const allRecipes = await Dbapi.findAll();
  
      res.json(gApi);
   
  });
  
  //DB Local
router.get("/api", async (req, res) => {
    const apiDb = await Dbapi.findAll();
    return res.json(apiDb);
  });
  


//~___________________________________________________
router.use("/all", All); //Dbapi + Post
router.use("/recipes", NameQuery); 
router.use("/recipes", IdParam);
router.use("/recipes",recipePost);
router.use("/diets",dietTypes);





module.exports = router;
