import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDietas,posterRecipes} from "../../actions";
import "./Form.css"
import Navbar from "../Navbar/Navbar" 

function validate(InputRecipes) {
    let errors = {};
    if(!InputRecipes.name){
        errors.name = 'Se requiere un Nombre';
    }else if(!InputRecipes.diets){
        errors.name = 'Se requieren Seleccionar la Dieta'
    }

}

function Form(){
    const dispatch = useDispatch()
    const dietsRoot = useSelector((state) => state.dietasForm)
    const[errors, setErrors] = useState({});
    const [InputRecipes, setInputRecipe] = useState({        
            image: "",
            name: "",
            diets: [],
            summary: "",
            healthScore: "",
            steps: "",        
    })

    useEffect(() => {
        dispatch(getDietas())
    },[dispatch])

    function handleCheck(e){
        setInputRecipe({
            ...InputRecipes,
            diets: [...InputRecipes.diets,(e.target.value)]// value=input
        })
    }

    function handleChange(e){
        setInputRecipe({
            ...InputRecipes,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...InputRecipes,
            [e.target.name]: e.target.value
        }))
        console.log(InputRecipes)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(posterRecipes(InputRecipes))
        alert("Recipe created")
        setInputRecipe({
            image: "",
            name: "",
            dietApi: [],
            summary: "",
            healthScore:"",
            steps: "",   
        })
    }

    return(
        <div>
            <Navbar/>
            <h5>Create Recipes</h5>
            <form className="form-total">
                <label>Image</label>
                <input type="text" name="image" value={InputRecipes.image} onChange={(e) => handleChange(e)} /> <br/>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={InputRecipes.name} onChange={(e) => handleChange(e)} /> <br/>
                  {/*   {(errors.name && <p className="error">{errors.name}</p>)}  */}
                </div>
                
                <label>Summary</label>
                <input type="text" name="summary" value={InputRecipes.summary} onChange={(e) => handleChange(e)} /> <br/>
                <label>Health Score</label>
                <input type="text" name="healthScore" value={InputRecipes.healthScore} onChange={(e) => handleChange(e)} /> <br/> 
                <label>Steps</label>
                <input type="text" name="steps" value={InputRecipes.steps} onChange={(e) => handleChange(e)} /> <br/>
           

            {
                dietsRoot.map(i => (
                    <div>
                        <input key={i.id} onClick={(e) => handleCheck(e)} type={"checkbox"} value={i.id} />
                        <label>{i.name}</label>
                    </div>
                ))
            } 
         {/*      <div><a className="las-a">{InputRecipes.dietasForm.map(i => i + " ")}</a></div> */}
                  <button onClick={handleSubmit}>Create</button>
            </form>  
        </div> 
    )
}

export default Form;