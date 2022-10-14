import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDietas,posterRecipes} from "../../actions";
import { validate } from "./Validators";
import "./Form.css"
import Navbar from "../Navbar/Navbar" 
   

function Form(){
    const dispatch = useDispatch()
    const dietsRoot = useSelector((state) => state.dietasForm)
    const allRecipes = useSelector((state)=> state.recipes)

    const [InputRecipes, setInputRecipe] = useState({        
        image: "",
        name: "",
        diets: [],
        summary: "",
        healthScore: "",
        steps: "",        
    })

    
    const[errors, setErrors] = useState({}); 

    
    useEffect(() => { 
        dispatch(getDietas())
    },[dispatch])

    function handleCheck(e){
         
        setInputRecipe({
            ...InputRecipes,
            diets: [...new Set([...InputRecipes.diets,(e.target.value)])]
        })// Set hace que no se repita la seleccion , los valores
        setErrors(validate({
            ...InputRecipes,
            [e.target.name]:e.target.value
        }))  
         
    }

    function handleChange(e){
        setInputRecipe({
            ...InputRecipes,
            [e.target.name]:e.target.value
        })  
        setErrors(validate({
            ...InputRecipes,
            [e.target.name]:e.target.value
        }))  
        console.log(InputRecipes)
    } 
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!InputRecipes.name) {
             alert("Se requiere llenar el Formulario de Creacion")
        }
        else{
            dispatch(posterRecipes(InputRecipes))
            setErrors(validate(InputRecipes))
            alert("Recipe created")
            setInputRecipe({
            image: "",
            name: "",
            diets: [],
            summary: "",
            healthScore:"",
            steps: "",   
        })
        }
        
    }

    return(
        <>
        <Navbar/>
        
        <div className="divTodo">
            

            
            <form className="form-total"  onSubmit={(e) => handleSubmit(e)} >
            <h5>Create Recipes</h5>
                <div>
                    <label>Image: </label>
                    <input type="text" name="image" value={InputRecipes.image} onChange={(e) => handleChange(e)} /> <br/>
                     {(errors.image && <p className="error">{errors.image}</p>)}   
                </div>
                
                <div>
                    <label>Name: </label>
                    <input type="text" name="name"   value={InputRecipes.name} onChange={(e) => handleChange(e)} /> <br/>
                    {(errors.name && <p className="error">{errors.name}</p>)}   
                </div>
                <div>
                    <label>Summary: </label>
                    <input type="text" name="summary" value={InputRecipes.summary} onChange={(e) => handleChange(e)} /> <br/>
                    {(errors.summary && <p className="error">{errors.summary}</p>)}  

                </div>
                
                <div>
                    <label>Health Score: </label>
                    <input type="text" name="healthScore" value={InputRecipes.healthScore} onChange={(e) => handleChange(e)} /> <br/> 
                    {(errors.healthScore && <p className="error">{errors.healthScore}</p>)} 
                </div>   
            <div>
                <label>Steps: </label>
                <input type="text" name="steps" value={InputRecipes.steps} onChange={(e) => handleChange(e)} /> <br/>
                {(errors.steps && <p className="error">{errors.steps}</p>)} 
            </div>
                 
            <div>
                <label>Diets: </label>
                <select onChange={(e) => handleCheck(e)} >
                {dietsRoot.map(i => (
                    <option value={i.id}>{i.name}</option>        
                ))
                } 
            </select>
            {(errors.diets && <p className="error">{errors.diets}</p>)}     
            </div>
              

            <button className="bottonCreate" type="submit" disabled={ Object.keys(errors).length<1 ? false : true}>Create</button>   




                      
           </form>

        <div className="nameDiets">
            <ul>
                <li className="listNameDiets">{  InputRecipes.diets.map(i => (
                  <button>{i}</button>
                 )) }</li>

            </ul>
        </div>
            


        </div> 
        </>
    )
}

export default Form;


// function handleChecked(e) {
//     if (e.target.checked) {
//         setInputRecipe({
//             ...InputRecipes,
//             status: e.target.value
//         })
//     }
// }
// <select onChange={(e) => handleCheck(e)} >
// {dietsRoot.map(i => (
//        <option value={i.name}>{i.name}</option>
             
        
//     ))
// } 
// </select>
//  <ul><li>{InputRecipes.dietsRoot.map(e => e + " ,")}</li></ul>

 {/* {
                dietsRoot.map(i => (
                    <div>
                        <input key={i.id} onClick={(e) => handleCheck(e)} type={"checkbox"} value={i.id} />
                        <label>{i.name}</label>
                    </div>
                ))
            }  */}




