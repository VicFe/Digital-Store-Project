import React from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { products as productsHome } from '../database/ProductListingHomeArray';
import { products as productsProducts } from '../database/ProductListingProductsArray';

const ProductListing = ({ className = '', products: customProducts }) => {
  const location = useLocation();
  const products = customProducts || (location.pathname === '/' ? productsHome : productsProducts);

  return (
    <div className={`ProductListing ${className}`}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};





export default ProductListing;
