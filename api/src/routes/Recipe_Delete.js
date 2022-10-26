const { Router } = require("express"); 
const { DbapiRecipe,getRecipesId } = require("../controllers/Food");
const {Recipe , Diet} = require("../db");

const router = Router();

router.delete("/:id",async(req,res)=>{
    const{id} =req.params;
    if (id) {
        const ides = await getRecipesId(id)
    let busco = await ides.destroy({
            where:{
                id: id,
            }
        })
        res.send(ides)
    }
    res.send("No existe")


})

module.exports = router;