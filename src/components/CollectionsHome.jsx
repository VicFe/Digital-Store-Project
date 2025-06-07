import React from 'react'
import CollectionsHomeArray from '../database/CollectionsHomeArray.js'
import CollectionHomeImage from './CollectionHomeImage.jsx'

const CollectionsHome = () => {
  return (
    <div className="CollectionHome">
        {CollectionsHomeArray.map((product, index) => (
        <CollectionHomeImage 
        key={index} 
        image={product.image}
        link = {product.link} />
      ))}
    </div>
  )
}

export default CollectionsHome
