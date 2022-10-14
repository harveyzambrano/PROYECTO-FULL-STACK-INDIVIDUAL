import React from "react";
import hscore from "../../Media/hscore.png"
import './Card.css'




export default function Card({ image, name,healthScore, dietsApi }) {  
    return (
        <div className="card-container"  >
         
           <div>
             <h2 className="card-title"> {name} </h2>
           </div>
            
           <div>
             <img className="image-container" src={image} alt="" />
           </div>
           
           <div >
              <a className="score-content"> <img className="hscore" src={hscore}/> {healthScore} </a>
           </div>

           <a className="a_Diets">Diets</a>
           <div className="dietcointainerR">
             
             <h5 className="h_diets" > <a className="a_diets">{dietsApi} </a></h5>         
           </div>
        </div>
    )
};









// export default function Card({ image, name, diets }) {  
//     return (
//         <div className="card-container">
//             <div>
//                 <h2 className="card-title">{name}</h2>            
//             </div>
//             <div>
//                 <img className="image-container"  src={image} alt="Not found"/>
//             </div>
            
//             <div className="dietcointainer">
//                <a className="a_Diets">Diets</a>
//                 {diets?.map(e => {
//                     return (
                    
//                         <h5 className="h_diets" ><a className="a_diets">{e}</a></h5>
//                     )
//                 })}            
//             </div>
            
//         </div>
//     )
// };
