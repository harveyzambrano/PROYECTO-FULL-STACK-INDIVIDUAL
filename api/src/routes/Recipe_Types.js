const { Router } = require("express");
const { Diet } = require("../db");
const { getTypes } = require("../controllers/TypeDiets.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const typeDiet = await getTypes();
    res.send(typeDiet);
  } catch (error) {
    console.log(error + " >>> In routes/ Recipe_Types.js");
  }
});

module.exports = router;
