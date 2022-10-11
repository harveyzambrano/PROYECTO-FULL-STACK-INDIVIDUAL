const axios = require("axios");
const { Recipe, Diet } = require("../db");


const PR = async(dataPost) => {
  
  const receta = await Recipe.create(dataPost)
  await receta.addDiet(dataPost.diets)
 const recetaInf = await Recipe.findOne({
   where:{
     name: receta.toJSON().name
   },
   include:{
     model: Diet,
    //  attributes: ["name"],
    //  through: {
    //    attributes: []
    //  }
   },
 })
 return recetaInf
}

 module.exports = {
   PR,
 };







// const PR = async(dataPost) => {
//   const receta = await Recipe.create(dataPost)
//   await receta.addDiet(dataPost.diets)
//  const recetaInf = await Recipe.findOne({
//    where:{
//      name: receta.toJSON().name
//    },
//    include:{
//      model: Diet,
//     //  through: {
//     //    attributes: []
//     //  }
//    },
//  })
//  return recetaInf
// }

