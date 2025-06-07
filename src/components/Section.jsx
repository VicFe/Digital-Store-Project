import React from 'react'
import { Link } from 'react-router-dom';


const Section = ({title, titleAlign = "left", link, titlelink, children}) => {
const isCentered = titleAlign === 'center';  
    return (
    <section className="section">
        <div className="section-header">
            <h2 className={`section-title ${titleAlign}`}>{title}</h2>
             {link && (
            <Link to={link.href} className="section-link">
                {titlelink}
            </Link>
        )}
        </div>
        <div className="section-content">
            {children}
        </div>  
    </section>
  )
}

export default Section

 
