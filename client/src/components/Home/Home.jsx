import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipes, filterDiets } from '../../actions/index.js'
import { Link } from 'react-router-dom'
import Card from '../Card/Card.jsx'
import './Home.css'
import Paginado from '../Paginado/Paginado.jsx'
import Navbar from '../Navbar/Navbar'
import loading from '../../Media/capoo-blue.gif'
 

function Home() {
  const dispatch = useDispatch() // si se usa hooks el useDispatch
  const allRecipes = useSelector((state) => state.recipes) //lo mismo q hacer el mapstateToProps, pero mas facil usando hooks asi
  console.log(allRecipes)

  const [currentPage, setCurrentPage] = useState(1) //[estado pag actual, setea pag actual]=useState(1: primera pag)                                                    //useSelector , trae todo lo q esta en el state.pokemons
  const [recipesPerPage, setRecipesPerPage] = useState(12) //12  pokemon por pagina
  const indexOfLasteRecipe = currentPage * recipesPerPage //12
  const indexOfFirstRecipe = indexOfLasteRecipe - recipesPerPage //0
  const currentRecipe = allRecipes.slice(indexOfFirstRecipe, indexOfLasteRecipe) //guarda pokemons por pagina
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllRecipes())
  }

  function hadleFilterDiets(e) {
    //e.preventDefault()
    dispatch(filterDiets(e.target.value))
  }
  return (
    <div>
      <Navbar />

      <h1 className="Title-Home">RECIPES</h1>
      <button className='button_refresh' onClick={handleClick}>Refresh</button>

      <div >
        <select className='selects' onChange={(e) => hadleFilterDiets}>
          <option disabled selected>
            Select by Diet
          </option>
          <option value="gluten free">gluten free</option>
          <option value="ketogenic">ketogenic</option>
          <option value="vegetarian">vegetarian</option>
          <option value="lacto vegetarian">lacto vegetarian</option>
          <option value="ovo vegetarian">ovo vegetarian</option>
          <option value="vegan">vegan</option>
          <option value="pescetarian">pescetarian</option>
          <option value="paleo">paleo</option>
          <option value="primal">primal</option>
          <option value="low fodmap">low fodmap</option>
          <option value="whole 30">whole 30</option>
        </select>
        <select className='selects'>
          <option value="asc">Upward</option>
          <option value="desc">Falling</option>
        </select>
        <select className='selects'>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>
      </div>

      <div>
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
          />
      </div>

      {currentRecipe.length > 0 ? (
        currentRecipe.map((i) => {
          return (
            <div className="Cards_grid">
              <Card
                name={i.name}
                image={i.image}
                dietsTypes={
                  i.dietsTypes ? i.dietsTypes : i.diets.map((i) => i.name)
                }
              />
            </div>
          )
        })
      ) : (
        <div>
          <img className="gif" src={loading} />
          <h3>loading ....</h3>
        </div>
      )}
    </div>
  )
}

export default Home

// {currentRecipe.length>0? currentRecipe.map((i) => {
//   return (
//     <div className="Cards_grid">
//       <Link to={'/home/' + i.id}>
//         <Card name={i.name} image={i.image} diets={i.diets}/>
//       </Link>
//     </div>

//   )

// })
// :<div>
// <img className='gif' src={loading} alt="" width= "240px" height="200px"/>
// <h3>loading ....</h3>
// </div>
// }
