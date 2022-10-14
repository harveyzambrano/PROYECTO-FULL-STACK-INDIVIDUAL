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
 
  //const[ recipe , setStateDetail] = useState([])
  
  useEffect(() => {
    dispatch(getDetail(id))   
    return  ()=>{
      dispatch(clear())
    }
    
  }, [dispatch, id])


  
  return (
    <div >
  
      {
        <div className='detail-container'>
          <h2 className="card-title">{recipe.name}</h2>
          <img className='imagen' src={recipe.image} />

          <div>
            <a> <img className="hscore" src={hscore}/> {recipe.healthScore}</a>
          </div>
          <div>
               <h4 className='summary'>Summary : {recipe.summary}</h4>
          </div>
          <a className="a_Diets">Diets</a>
            <div className="dietcointainer">
              {recipe.diets ? recipe.diets.map(i => i.name): recipe.dietsTypes }
            </div>
           
        </div>
      }
    <Link to={"/recipes"}><button className='back'>Back</button> </Link> 
     
    </div>
  )
}
