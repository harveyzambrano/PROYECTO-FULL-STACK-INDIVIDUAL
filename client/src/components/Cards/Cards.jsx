import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipes } from '../../actions/index.js'
import Card from '../Card/Card.jsx'
import "./Cards.css"

function Cards() {
  const dispatch = useDispatch()
  const getRecipes = useSelector((state) => state.recipes)

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  return (
    <div className="Cards_total">
      {getRecipes.map((i) => {
        return (
          <div className="Cards_grid">
            <Card name={i.name} image={i.image} diets={i.diets} />
          </div>
        )
      })}
    </div>
  )
}
export default Cards
