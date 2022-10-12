import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Search/Seach'
import Card from '../Card/Card'
import { Paginado } from '../Paginado/Paginado.jsx'
import './Home.css'
import {
  getApi,
  typeDiet, 
  byOrder,
  byHealthScore,
  getDietas,
} from '../../actions/index'

const Food = () => {
  const dispatch = useDispatch()
  const getApiDb = useSelector((state) => state.recipes)
  const SelectDietas = useSelector((state) => state.dietasForm)

  const [paginaActual, setpaginaActual] = useState(1)
  const [recipesPerPage] = useState(9)
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
  }
  const handleDiets = (e) => {
    e.preventDefault()
    dispatch(typeDiet(e.target.value))
  } 

  const handleByOrder = (e) => {
    e.preventDefault()
    dispatch(byOrder(e.target.value))
    setOrder(e.target.value)
  }

  const handleByScore = (e) => {
    e.preventDefault()
    dispatch(byHealthScore(e.target.value))
    setOrder(e.target.value)
  }

  return (
    <>
      <div >
        <Navbar />
    
      <div>
        <SearchBar/>
      </div>
       
        <button
          className="button_refresh"
          onClick={(e) => {
            handleClick(e)
          }}
        >
          Refresh
        </button>
      </div>
       <div className='allselects'>
      <div>
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
      </div>

      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={getApiDb.length}
        paginado={paginado}
      />
  <div  className="card-container-home">
      {RecipesActuales? RecipesActuales.map((e) => {
        return (
          <div>
           <Link to={'/recipes/' + e.id}  className='font'>
            <Card 
            
                 name={e.name}
                 image={e.image}  
                 healthScore={e.healthScore}
                 dietsApi={e.dietsApi ? e.dietsApi  + "-" : e.diets.map((i) =>i.name + "- ") }
            />             
            </Link>
          </div>
        )
      }):
      "Recipe not found"}
      </div>
    </>
  )
}

export default Food


// {getApiDb.map((e) => {
//   return (
//     <div className="card-container"  >
//      <Link to={'/recipes/' + e.id}  className='font'>
//         <div>
//           <h2 className="card-title">{e.name} </h2>
//         </div>
         
//         <div>
//           <img className="image-container" src={e.image} alt="" />
//         </div>
        
//         <div>
//           <a>HealthScore: {e.healthScore} </a>
//         </div>
//         <div className="dietcointainer">
//           <a className="a_Diets">Diets</a>
//         </div>
//           <h5 className="h_diets" > <a className="a_diets">{e.dietsApi ? e.dietsApi : e.diets.map((i) =>i.name) } </a> </h5>
        
//         <br />
//       </Link>
//     </div>
//   )
// })}




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


