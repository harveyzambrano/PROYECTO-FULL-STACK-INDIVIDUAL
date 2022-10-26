const { Router } = require("express");
const { Recipe, Diet } = require("../db"); 

const router = Router();


router.post("/", async (req, res) => {
  try {
    const{image,name,summary,healthScore,steps,diets}=req.body;
    
    const recipeCreated = await Recipe.create({
      image,name,summary,healthScore,steps
    })
    
    const DietTypes= await Diet.findAll({
      where: {name: diets}
    })

  

    recipeCreated.addDiets(DietTypes)

    return res.status(201).send(recipeCreated)

  
  } catch (error) {
    console.log(error + ">>> routes/Recipe_Post.js");
  }
});

 module.exports = router;









//router.post("/", async (req, res) => {
// const resPost = await PR(req.body);   
// res.status(201).send(resPost);   
//}

// const PR = async (dataPost) => {
//   try {
//     const receta = await Recipe.create(dataPost);
//     await receta.addDiet(dataPost.diets);
//     const recetaInf = await Recipe.findOne({
//       where: {
//         name: receta.toJSON().name,
//       },
//       include: {
//         model: Diet
//       },
//     });
//     return recetaInf;
//   } catch (error) {
//     console.log(error + " >>> In controllers  Post.js PR()");
//   }
// };





