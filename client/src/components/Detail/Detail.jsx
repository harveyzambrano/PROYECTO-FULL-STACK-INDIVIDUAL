import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, getDietas } from '../../actions'
import { useEffect } from 'react'

export default function Detail() {
  const dispatch = useDispatch()
  let { id } = useParams()
  const recipe = useSelector((state) => state.detail)
  console.log(recipe)
  useEffect(() => {
    dispatch(getDetail(id))
    dispatch(getDietas())
  }, [dispatch, id])
  return (
    <div>
      {
        <div>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} />
          <div>
            <h4>Summary : {recipe.summary}</h4>
          </div>
            <div>
              DIETS: {recipe.diets ? recipe.diets.map(i => i.name): recipe.dietsTypes }
            </div>
          <div>
            <h4>Nivel de salud:{recipe.healthScore}</h4>
          </div>
        </div>
      }

     
    </div>
  )
}
 {/* <Link to="/home">
        <button className="backButton">Back</button>
      </Link> */}