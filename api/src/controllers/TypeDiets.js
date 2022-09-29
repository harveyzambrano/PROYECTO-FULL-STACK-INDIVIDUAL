const axios = require("axios");
const { Diet } = require("../db");

const getTypes = async () => {
  
  const dietTypes = [
   {id:1, name: "gluten free"},
   {id:2, name: "ketogenic"},
   {id:3, name:  "vegetarian"},
   {id:4, name: "lacto vegetarian"},
   {id:5, name:  "ovo vegetarian"},
   {id:6, name: "vegan"},
   {id:7, name: "pescetarian"},
   {id:8, name: "paleo"},
   {id:9, name: "primal"},
   {id:10, name: "low fodmap"},
   {id:11, name: "whole 30"}
  ];

  for (let i = 0; i < dietTypes.length; i++) {
    await Diet.findOrCreate({
        where: dietTypes[i]
    })
  }
  return dietTypes

};

module.exports = {
  getTypes,
};
