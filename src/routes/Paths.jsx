import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import ProductsListing from '../pages/ProductsListing';
import ProductViewPage from '../pages/ProductViewPage';
import NotFound from '../pages/NotFound';

const Paths = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="produtos" element={<ProductsListing />} />
            <Route path="produtos/:id" element={<ProductViewPage />} />
            <Route path="categorias" element={<NotFound/>} />
            <Route path="pedidos" element={<NotFound/>} />
          </Route>
        </Routes>
  );
};

export default Paths;
