import React from 'react'
import './shimmer.css'
const Shimmer = () => {
   const loop = [0,1,2,3,4,5,6,7,8,]
  return (
    <div className='shimmer'>
      {
         loop.map(ele => (
               <div key={ele} className="card br">
   <div className="wrapper">
      
      <div className="text br animate"></div>
      <div className="text br animate w60"></div>
      <div className="text br animate w40"></div>
   </div>


  
         </div>))
      }
      

     
    </div>
  )
}

export default Shimmer

