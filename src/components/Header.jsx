import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';
import Logo from './Logo';
import MiniCart from "../assets/mini-cart.svg";
import { NavLink, useLocation, useNavigate  } from "react-router-dom";
import Paths from "../routes/Paths";
import { PiListBold } from "react-icons/pi"; 
import FilterGroup from '../components/FilterGroup'



const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');


  const isHome = location.pathname === '/';
const isProductDetail = /^\/produtos\/[^/]+$/.test(location.pathname); // ex: /produtos/123
const isProductListing = location.pathname === '/produtos';


  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsSidebarOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

const navigate = useNavigate();

const handleSearch = () => {
  if (searchQuery.trim()) {
    navigate(`/products?filter=${encodeURIComponent(searchQuery.trim())}`);
    setIsSidebarOpen(false); // fecha sidebar em mobile se estiver aberta
  }
};
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};



  return (
    <div className="header">
      <div className="header-content">
  {/* Linha do topo para mobile */}
        <div className="header-content__mobile-top">
          <div className="header-content__mobile-top_horizontal">
            <button className="menu-toggle" onClick={toggleSidebar}>
            <PiListBold size={24} />
            </button>

            <Logo isHeader="header" className="header-content__logo" />

            <div className="header-content__shopping-cart">
              <img src={MiniCart} />
            </div>

          </div>
          
          <div className="header-content__search-container">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="header-content__search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span
              className="pi pi-search"
              role="button"
              onClick={handleSearch}
            />
          </div>
        </div>

  {/* Linha principal (desktop) */}
  <div className="header-content__desktop">
    <Logo isHeader="header" className="header-content__logo" />

    <div className="header-content__search-container">
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="header-content__search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <span
        className="pi pi-search"
        role="button"
        onClick={handleSearch}
      />
    </div>

    <div className="header-content__redirection">
      <a className="header-content__redirection-signup">Cadastre-se</a>
      <button className="header-content__redirection-signin">Entrar</button>
    </div>

    <div className="header-content__shopping-cart desktop-cart">
      <img src={MiniCart} />
    </div>
  </div>
</div>


      <div className="header-navbar">
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Home</NavLink></li>
            <li><NavLink to="/produtos" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Produtos</NavLink></li>
            <li><NavLink to="/categorias" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Categorias</NavLink></li>
            <li><NavLink to="/pedidos" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Meus pedidos</NavLink></li>
          </ul>
        </nav>
      </div>

      {isSidebarOpen && (
  <div className="mobile-sidebar" ref={sidebarRef}>
    {isHome || isProductDetail ? (
      <>
        <div className="mobile-sidebar_informations">
          <h3>Páginas</h3>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Home</NavLink></li>
            <li><NavLink to="/produtos" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Produtos</NavLink></li>
            <li><NavLink to="/categorias" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Categorias</NavLink></li>
            <li><NavLink to="/pedidos" className={({ isActive }) => `header-navbar__text-direction ${isActive ? 'active' : ''}`}>Meus pedidos</NavLink></li>
          </ul>
        </div>
        
        <div className="mobile-sidebar_redirection">
          <hr />
          <button className="header-content__redirection-signin">Entrar</button>
          <a className="header-content__redirection-signup">Cadastre-se</a>
        </div>
      </>
    ) : isProductListing ? (
      
       
        <div className="mobile-sidebar_redirection-productlisting">
            <p>Filtrar por</p>
                                <hr/>
                                
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

                                
                            
                            
                           
     
    ) : null}
  </div>
)}

    </div>
  );
};

export default Header;
