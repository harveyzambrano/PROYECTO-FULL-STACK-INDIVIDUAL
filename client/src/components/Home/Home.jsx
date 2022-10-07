import React, { useEffect, useState , setOrden } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getAllRecipes, orderByDiet, orderByName,orderByHealth} from '../../actions/index.js'
import { Link } from 'react-router-dom'
import Card from '../Card/Card.jsx'
import './Home.css'
import Paginado from '../Paginado/Paginado.jsx'
import Navbar from '../Navbar/Navbar'
import loading from '../../Media/capoo-blue.gif'
 

function Home() {
  const dispatch = useDispatch() 
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.diets);

  const [orden, setOrden] = useState('');
  const [currentPage, setCurrentPage] = useState(1) //[estado pag actual, setea pag actual]=useState(1: primera pag)                                                    //useSelector , trae todo lo q esta en el state.pokemons
  const [recipesPerPage, setRecipesPerPage] = useState(9) //12  recetas por pagina
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

  function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }
  function handleHealth(e){
    e.preventDefault();
    dispatch(orderByHealth(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }
  
 
  function handleDiet(e){
    e.preventDefault();
    dispatch(orderByDiet(e.target.value))
    // setCurrentPage(1);
    // setOrden(`Ordenado ${e.target.value}`)
  }
  return (
    <div>
      <Navbar />

      <h1 className="Title-Home">RECIPES</h1>
      <button className='button_refresh' onClick={handleClick}>Refresh</button>

      <div >
        <select className='selects'  onChange={(e) => handleDiet(e)}>
          <option disabled selected>Select By Diet</option>
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
        <select onChange={e => handleSort(e)} className='selects' >
          <option disabled selected>Order</option>
          <option value="asc">Upward</option>
          <option value="desc">Falling</option>
        </select>

        <select onChange={e => handleHealth(e)} className='selects' >
          <option disabled selected>Order</option>
          <option value="ascH">Healt Asc</option>
          <option value="desc">Healt Des</option>
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
            <div>
              
                <Card 
                name={i.name}
                image={i.image}                
                dietsTypes={
                  i.dietsTypes ? i.dietsTypes : i.allDiets.map((i) => i.name)
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




















// function handleCreated(e){
//   e.preventDefault()
//   dispatch(filterByCreated(e.target.value))
// }


// <select className='selects' onChange={e => handleCreated(e)}>
// <option disabled selected>Recipes Created</option>       
// <option value="created">Created</option>
// <option value="api">Api</option>
// </select>

