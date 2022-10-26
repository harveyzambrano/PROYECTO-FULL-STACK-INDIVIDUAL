import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Search/Seach'
import Card from '../Card/Card'
import { Paginado } from '../Paginado/Paginado.jsx'
import { validate } from "../Form/Validators.jsx";
import s from "../Home/imageHome.module.css"
import './Home.css'
import {
  getApi,
  typeDiet, 
  byOrder,
  byHealthScore,
  getDietas,byName, DeletePost
} from '../../actions/index'

const Food = () => {
  const dispatch = useDispatch()
  const getApiDb = useSelector((state) => state.recipes)
  const SelectDietas = useSelector((state) => state.dietasForm)

  const [paginaActual, setpaginaActual] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(9)
  const inidiceDelUltimoRecipe = paginaActual * recipesPerPage
  const indiceDelPrimerRecipe = inidiceDelUltimoRecipe - recipesPerPage
  const RecipesActuales = getApiDb.slice(
    indiceDelPrimerRecipe,
    inidiceDelUltimoRecipe,
  )


  const paginado = (pageNumber) => {
    setpaginaActual(pageNumber)
  }
 
  const [order, setOrder] = useState('')

  useEffect(() => {
    dispatch(getApi())
    dispatch(getDietas())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault() // Refresh
    dispatch(getApi())
      setpaginaActual(1) 
  }
  const handleDiets = (e) => {
    e.preventDefault()
    dispatch(typeDiet(e.target.value))
    setpaginaActual(1)
  } 

  const handleByOrder = (e) => {
    e.preventDefault()
    dispatch(byOrder(e.target.value))
    setOrder(e.target.value) 
    setpaginaActual(1)
  }

  const handleByScore = (e) => {
    e.preventDefault()
    dispatch(byHealthScore(e.target.value))
    setOrder(e.target.value) 
    setpaginaActual(1) 
  }
  //*==== Next - Back ====
  const handleBack = (e) => {
    e.preventDefault()
    setpaginaActual(paginaActual - 1)
  }
  const handleNext = (e) => {
    e.preventDefault()
    setpaginaActual(paginaActual + 1)
  }

  function handleDeletePost(e){
   /*  e.preventDefault() */
    dispatch(DeletePost(e.target.value))
    console.log(e.target.value)
    setpaginaActual(1)
  }


//*=====SEARCH========
const [name, setName] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
 };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getApiDb.find(e => e.name.toLowerCase().startsWith(name.toLowerCase()) === name.toLowerCase().startsWith(name.toLowerCase())) )
      {
      alert("The name its not found")
      document.getElementById("search").value="";
    }else{
    dispatch(byName(name));
    document.getElementById("search").value = "";
    setpaginaActual(1)

    }
    
  };

  return (
    <div   className='imgH' >
      <div >
       
        <Navbar />
        
        <div class="button">Recipes</div>
        <link async href="https://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
        
        
           
             
      </div>

      <div  className='allselects'>
            <div >
            <button className="button_refresh" onClick={(e) => {handleClick(e)}}>
            Refresh
      </button>
              <select className="selects" onChange={(e) => handleByOrder(e)}>
                <option disabled selected>
                  Order
                </option>
                <option value="Asc">A-Z</option>
                <option value="Desc">Z-A</option>
              </select>
            </div>
            <div>
              <select className="selects" onChange={(e) => handleByScore(e)}>
                <option disabled selected>
                  Order Score
                </option>
                <option value="Max">Max</option>
                <option value="Min">Min</option>
              </select>
            </div>

            <select className="selects" onChange={(e) => handleDiets(e)}>
              <option disabled selected>
                Select By Diet
              </option>
              {SelectDietas.map((i) => (
                <option value={i.name} key={i.name}>
                  {i.name}
                </option>
              ))}
            </select>
          
            <div >
              <input  className="search-input"
                      id="search"
                      type="text"
                      placeholder="Search..."
                      autoComplete="off"
                      onChange={(e) => handleInputChange(e)} />
              <button className="button_seach" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
           </div>
      </div>
      
      
     <button disabled={paginaActual===1? true: false} onClick={e => handleBack(e)}>Back</button>
      <button value={paginaActual}>{paginaActual}</button>
      <button disabled={paginaActual === 12? true: false} onClick={e => handleNext(e)}>Next</button> 

      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={getApiDb.length}
        paginado={paginado}
      />
  <div  className="card-container-home">
      {RecipesActuales? RecipesActuales.map((e) => {
        return (
          <div >

           <Link to={'/recipes/' + e.id}  className='font'>
            <Card 

                 name={e.name}
                 image={e.image}  
                 healthScore={e.healthScore}
                 dietsApi={e.dietsApi ? e.dietsApi  + "-" : e.diets.map((i) =>i.name + "- ") }
            />             
            </Link>            
        {/*   <button value={e.id}  onClick={e => handleDeletePost(e)}>DELETE</button> */}
          </div>
        )
      }):
      "Loading..."}
      </div >
        
    </div>
  )
}

export default Food

 




{
  /* <div>
{getApiDb
  ? getApiDb.map((e) => {
      return (
        <div>
          <Link to={"/recipes/" + e.id}>
          <img src={e.image} alt="" /> <br />
          name: {e.name} <br />
          summary: {e.summary} <br /> 
          healthScore: {e.healthScore} <br />
          steps: {e.steps} <br /> 
          diets: {e.dietsApi? e.dietsApi : e.diets.map(i=>i.name)} <br />
          dishTypes: {e.dishTypes} <br /> 
          </Link>
        </div>
      );
    })
  : "No hay food"}
</div> */
}


