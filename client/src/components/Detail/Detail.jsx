import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, getDietas, clear } from '../../actions'
import hscore from "../../Media/hscore.png"
import { useEffect } from 'react'
import "./Detail.css"

export default function Detail() {
  const dispatch = useDispatch()
  let { id } = useParams()
  const recipe = useSelector((state) => state.detail)
 console.log(recipe)
  //const[ recipe , setStateDetail] = useState([])
  
  useEffect(() => {
    dispatch(getDetail(id))   
    return  ()=>{
      dispatch(clear())
    }
    
  }, [dispatch, id])


  
  return (
    <div className="detalleAll">
  
      {
        <div className='detail-container'>
          <h2 className="detail-title">{recipe.name}</h2>
          <img className='imagen-Detail' src={recipe.image} />

          <div>
            <a className="score-content"> <img className="imageScore" src={hscore}/> {recipe.healthScore}</a>
          </div>

          <a className="a_Diets">Summary</a>
          <div className="dietcointainer">
               <p className='summary'> {recipe.summary}</p>
          </div>
           
          <a className="a_Diets">Steps</a>
          <div className="dietcointainer">
             <a > {recipe.steps}  </a>  
          </div>
          
          <a className="a_Diets">Diets</a>
            <div className="dietcointainer">
              {recipe.diets ? recipe.diets.map(i =>" - " + i.name): recipe.dietsTypes }
            </div>

            <a className="a_Diets">dishTypes</a> 
            <div className="dietcointainer">
               <a className='dishTypes'> {recipe.dishTypes}</a>
          </div>  
           
        </div>
      }
    <Link to={"/recipes"}><button className='back'>Back</button> </Link> 
     
    </div>
  )
}
