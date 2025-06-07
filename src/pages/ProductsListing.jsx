import React, {useState} from 'react'
import Layout from '../components/Layout'
import FilterGroup from '../components/FilterGroup'
import ProductListing from '../components/ProductListing'
import Section from '../components/Section'
import { products as productsProducts } from '../database/ProductListingProductsArray';




const ProductsListing = () => {
    const [sortOption, setSortOption] = useState("");
    const productCount = productsProducts.length;


  return (
    <>
        <div className="ProductListing">
            <div className="ProductListing__content">

                <div className="ProductListing__content-filters">
                    <div className="ProductListing__content-filters-options">
                        <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        >
                        <option 
                        className="ProductListing__content-filters-options-disabled"
                        disabled hidden
                        value=""
                        >
                        Ordenar por
                        </option>
                        <option value="mais-relevantes">Mais relevantes</option>
                        <option value="menos-relevantes">Menos relevantes</option>
                        </select>

                    </div>

                    <div className="ProductListing__content-filters-camp">
                        <p>Filtrar por</p>
                        <hr></hr>
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[
                                { text: "Adiddas", value: "adiddas" },
                                { text: "Calenciaga" },
                                { text: "K-Swiss", value: "kswiss" },
                                { text: "Nike" },
                                { text: "Puma" }
                            ]}
                        />
                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={[
                                { text: "Esporte e lazer", value: "Esporte e lazer" },
                                { text: "Casual", value: "casual" },
                                { text: "Utilitário", value: "Utilitário" },
                                { text: "Corrida", value: "corrida" },
                            ]}
                        />
                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={[
                                { text: "Masculino", value: "Masculino" },
                                { text: "Feminino", value: "Feminino" },
                                { text: "Unisex", value: "Unisex" },
                            ]}
                        />
                        <FilterGroup
                            title="estado"
                            inputType="radio"
                            options={[
                                { text: "Novo", value: "Novo" },
                                { text: "Usado", value: "Usado" },
                            ]}
                        />
                    
                    
                    
                    </div>

                 


                </div>

                <Section
                    title = {`Foram encontrados ${productCount} produtos`}
                    titleAlign = 'left'
                >
                    <ProductListing
                    className= "grid-3"
                    />             
                </Section>

                
                

            </div>
        </div>



    </>
  )
}

export default ProductsListing
