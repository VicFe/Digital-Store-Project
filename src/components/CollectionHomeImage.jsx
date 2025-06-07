import React from 'react'
import {Link} from "react-router-dom"

const CollectionHomeImage = ({image, link}) => {
  return (
    <div className="CollectionHomeImage">
        <img
          className="CollectionHomeImage-image"
          src={image}
          width="405"
          height="251"
        />
        <Link
         to ={link}
         className = "CollectionHomeImage-button">
            Ver mais
        </Link>
            
    </div>
  )
}

export default CollectionHomeImage
