import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, clear } from '../../actions'
import hscore from '../../Media/hscore.png'
import { useEffect } from 'react'
import './Detail.css'

export default function Detail() {
  const dispatch = useDispatch()
  let { id } = useParams()
  const recipe = useSelector((state) => state.detail)
  console.log(recipe)
  //const[ recipe , setStateDetail] = useState([])

  useEffect(() => {
    dispatch(getDetail(id))
    
    return () => {
      dispatch(clear())
    }
  }, [dispatch, id])

  return (
    <div  src='../../Media/fondoHome.jpg' className='imgD'>
      {
        <div className="detalle">
          
          <div className="detail-container-imagen">
            <h1 className='Detalle-Detalle'>Detail</h1>
            <h2 className="detail-title">{recipe.name}</h2>
            <div >
              <img className="img-Detail" src={recipe.image} />
            </div>
            

            <div className='scores'>
              
                {' '}
                <img className="imageScores" src={hscore} />
               <a className="score-content">  {recipe.healthScore}
              </a>
            </div>

            <a className="a_Dietas">Diets</a>
            <div className="dietcointainer">
              {recipe.diets
                ? recipe.diets.map((i) => ' - ' + i.name)
                : recipe.dietsTypes}
            </div>

            <a className="a_Dietas">Dish Types</a>
            <div className="dietcointainer">
              <a className="dishTypes"> {recipe.dishTypes}</a>
            </div>
          </div>

          <div className="detail-container">
            <a className="a_Dietas">Summary</a>
            <div className="dietcointainer">
              <p className="summary"> {recipe.summary}</p>
            </div>

            <a className="a_Dietas">Steps</a>
            <div className="dietcointainer">
              <a> {recipe.steps} </a>
            </div>
          </div>
        </div>
      }
      <Link to={'/recipes'}>
        <button className="back">Back</button>{' '}
      </Link>
    </div>
  )
}
