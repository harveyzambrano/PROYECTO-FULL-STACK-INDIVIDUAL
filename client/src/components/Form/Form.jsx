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
    
    function handleDelete (e){
        setInputRecipe({
            ...InputRecipes,
            diets: InputRecipes.diets.filter(diet => diet !== e)
        })
    }

    return(
    <div className="TodoForm">
        <div   className='imgF'>
        <Navbar/>
        
              
            <form className="form-total"  onSubmit={(e) => handleSubmit(e)} >
            <h3 className="title-form">Create Recipes</h3>
             
                <label className="labels">Image </label>
                <div className="inputsForm" >
                    <input placeholder="Image" type="text" name="image" value={InputRecipes.image} onChange={(e) => handleChange(e)} /> <br/>
                     {(errors.image && <p className="error">{errors.image}</p>)}   
                </div>
                
                <label className="labels">Name </label>
                <div className="inputsForm">
                    <input placeholder="Name" type="text" name="name"   value={InputRecipes.name} onChange={(e) => handleChange(e)} /> <br/>
                    {(errors.name && <p className="error">{errors.name}</p>)}   
                </div>

                <label className="labels">Summary </label>
                <div className="inputsForm">                    
                    <input placeholder="Summary" type="text" name="summary" value={InputRecipes.summary} onChange={(e) => handleChange(e)} /> <br/>
                    {(errors.summary && <p className="error">{errors.summary}</p>)}  

                </div>
                
                <label className="labels">Health Score </label>
                <div className="inputsForm">
                    <input placeholder="Healt Score" type="text" name="healthScore" value={InputRecipes.healthScore} onChange={(e) => handleChange(e)} /> <br/> 
                    {(errors.healthScore && <p className="error">{errors.healthScore}</p>)} 
                </div>   

                <label className="labels">Steps </label>
                <div className="inputsForm">
                     <input placeholder="Steps" type="text" name="steps" value={InputRecipes.steps} onChange={(e) => handleChange(e)} /> <br/>
                     {(errors.steps && <p className="error">{errors.steps}</p>)} 
                 </div>
                 
            <div>
                <label >Diets </label>
                <select className="selectsForm" onChange={(e) => handleCheck(e)} >
                  
                {dietsRoot.map(i => (
                     
                    <option value={i.name} key={i.id}>{i.name }</option>        
                ))
                } 
            </select>
          
            {(errors.diets && <p className="error">{errors.diets}</p>)}     
            </div>
            <button className="button-create" type="submit" /* disabled={ Object.keys(errors).length<1 ? false : true} */>Create</button>   

                

        
  
                   
           </form>
        <div className="dietasSelect">
            {InputRecipes.diets.map(e => 
           <div className="divDelete">           
                <div>
                     <button className="buttonX" key={e.id} onClick={() => handleDelete(e)}>X</button>
                 </div>                
                 <div>
                     <h4>{e}</h4>  
                </div>                
           </div>           
           )} 
        </div>

         <div className="imagenForm"></div>
        
        </div>
    </div>
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




