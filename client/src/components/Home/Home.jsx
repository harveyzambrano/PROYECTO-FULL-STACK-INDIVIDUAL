import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Paginado} from "../Paginado/Paginado.jsx";
import {
  getApi,
  typeDiet,
  byName,
  byOrder,
  byHealthScore,
  getDietas,
} from "../../actions/index";

const Food = () => {
  const dispatch = useDispatch();
  const getApiDb = useSelector((state) => state.recipes);
  const allRecipes = useSelector((state) => state.allrecipes);
  const SelectDietas = useSelector((state)=> state.dietasForm)
  
  const [paginaActual, setpaginaActual] = useState(1)
  const [recipesPerPage, ] = useState(9)
  const inidiceDelUltimoRecipe= paginaActual * recipesPerPage
  const indiceDelPrimerRecipe= inidiceDelUltimoRecipe-recipesPerPage
  const pokemonsActuales= allRecipes.slice(indiceDelPrimerRecipe,inidiceDelUltimoRecipe)

   const paginado = (pageNumber)=>{
    setpaginaActual(pageNumber)
   }


  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

  // const gd = getApiDb.map(
  //   (e) => e.dietsApi
  // );
  // console.log(gd); 

  /* const gda = getApiDb.map((e) => e.dietsApi);
  console.log(gda); */

  useEffect(() => {
    dispatch(getApi());
    dispatch(getDietas())
  }, [dispatch]);

  const handleDiets = (e) => {
    e.preventDefault();
    dispatch(typeDiet(e.target.value));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(byName(name));
  };

  const handleByOrder = (e) => {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setOrder(e.target.value);
  };

  const handleByScore = (e) => {
    e.preventDefault();
    dispatch(byHealthScore(e.target.value));
    setOrder(e.target.value);
  };

  return (
    <> 
      <div>
      <Navbar/>
        <select className="selects" onChange={(e) => handleDiets(e)}>
          <option disabled selected>
            Select By Diet
          </option>
                {
                  SelectDietas.map( i => (
                    <option value={i.name} key={i.name}>{i.name}</option>
                  ))
                }
        </select>
      </div>
      <br />
      <div>
        <select onChange={(e) => handleByOrder(e)}>
          <option disabled selected>
            Order
          </option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleByScore(e)}>
          <option disabled selected>
            Order Score
          </option>
          <option value="Max">Max</option>
          <option value="Min">Min</option>
        </select>
      </div>
      <div>
        <label>By Name</label>
        <br />
        <input
          type="text"
          placeholder="Search..."
          /*  autoComplete="off" */
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </div>
      <Paginado
        recipesPerPage = {recipesPerPage}
        allRecipes = {allRecipes.length}
        paginado = {paginado}
        />
      <div>
        {pokemonsActuales.map((e) => {
              return (
                <div>
                  <Link to={"/recipes/" + e.id}>
                  <img src={e.image} alt="" /> <br />
                  name: {e.name} <br />
                  {/* summary: {e.summary} <br /> */}
                  healthScore: {e.healthScore} <br />
                 {/*  steps: {e.steps} <br /> */}
                  diets: {e.dietsApi? e.dietsApi : e.diets.map(i=>i.name)} <br />
                  {/* dishTypes: {e.dishTypes} <br /> */}
                  </Link>
                </div>
              );
            })
        }
      </div>
    </>
  );
};

export default Food;


{/* <div>
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
</div> */}