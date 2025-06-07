import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Gallery from '../components/Gallery'
import ProductListing from '../components/ProductListing'
import CollectionsHome from '../components/CollectionsHome'
import Collection2 from '../components/Collection2'
import {Link} from "react-router-dom"


const HomePage = () => {
  return (
    
    <>

      <Gallery/>

      <Section
      title = "Coleções em destaque"
      link = {{undefined}}>
        <CollectionsHome/>
      </Section>

      <Section
      title = "Coleções em destaque"
      titleAlign = 'center'>
          <Collection2/>
      </Section>
      
      <Section
        title="Produtos em alta"
        titlelink = "Ver todos"
        link={{ href: "/produtos" }}>
        <ProductListing 
        className='grid-4'
        />
      </Section>

      <div className="section-final">
        <div className="section-final__image">
          <div className="section-final__image-circle"></div>
          <img 
          className="section-final__image-tenis"
          src = "/section-final-tenis.png"
          alt = "Tênis"
          
          />
        </div>
        <div className="section-final__content">
          <p>Oferta especial</p>
          <h3>Air Jordan edição de colecionador</h3>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa perferendis laudantium repellat laborum ullam et quam. Suscipit rerum ut ipsum natus nam perspiciatis veritatis modi, sint temporibus eaque sequi!</h6>
          <Link
          to = "/produtos"
          className = "section-final__content-button"
          > Ver oferta
          </Link>

        </div>
      </div>



        
        

    </>
    
  )
}

export default HomePage
