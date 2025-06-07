import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import BuyBox from '../components/BuyBox'
import Section from '../components/Section'
import ProductOptions from '../components/ProductOptions'
import ProductListing from '../components/ProductListing'
import { products as productsProducts } from '../database/ProductListingProductsArray';



const ProductViewPage = () => {
  return (
    <>
        <div className="ProductViewPage">
          <div className="ProductViewPage__product-informations">
            <div className="ProductViewPage__product-informations-gallery">
              <Gallery 
              showThumbs    
              width = "700px"
              height = "570px"
              />
            </div>
            <div className="ProductViewPage__product-informations-buybox">
             <BuyBox
              name="Tênis Esportivo"
              reference="COD1234"
              stars={4.7}
              rating={98}
              price="R$ 299,00"
              priceDiscount="R$ 499,00"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            >
            <ProductOptions
              label="Tamanhos"
              options={["39", "41", "42", "47"]}
              radius="8px"
              shape="square"
              type="text"
            />

            <ProductOptions
            label="Cores"
            options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
            shape="circle"
            type="color"
          />
          </BuyBox>
            </div>
          </div>
          
          <div className="ProductViewPage__related-products">
            <Section
              title="Produtos relacionados"
              titlelink = "Ver todos"
              link = "/">
              <ProductListing
                className="grid-4"
                products={productsProducts.slice(0, 4)}
              />
            </Section>
            

          </div>

        </div>

    </>

  )
}

export default ProductViewPage
