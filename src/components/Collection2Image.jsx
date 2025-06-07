import React from 'react'
import {Link} from "react-router-dom"


const Collection2Image = ({image, link, name}) => {
  return (
    <div className="Collection2Image">
         <Link
            to = {link}
            className = "Collection2Image-button">
            <img
            className="Collection2Image-image"
            src={image}
            alt={name} 
                        
        />
            <p className="Collection2Image-name">{name}</p>
            
        </Link>
    </div>
      
  )
}

export default Collection2Image
