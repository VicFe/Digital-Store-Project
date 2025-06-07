import React from 'react'
import Collection2Image from './Collection2Image'
import Collection2Images from '../database/Collection2Images.js'

const Collection2 = () => {
  return (
       <div className="Collection2Home">
           {Collection2Images.map((product, index) => (
           <Collection2Image  
           key={index} 
           image={product.image}
           link = {product.link}
           alt = {product.name}
           name = {product.name}
           />
         ))}
       </div>
  )
}

export default Collection2
