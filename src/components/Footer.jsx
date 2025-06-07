import React from 'react'
import Logo from './Logo'
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import FooterColumn from './FooterColumn';

const Footer = () => {
  const informations = [
    { text: "Sobre Drip Store", link: "/" },
    { text: "Segurança", link: "/" },
    { text: "Whishlist", link: "/" },
    { text: "Blog", link: "/" },
    { text: "Trabalhe conosco", link: "/" },
    { text: "Meus pedidos", link: "/" },
  ];

  const categorys = [
    { text: "Camisetas", link: "/" },
    { text: "Calças", link: "/" },
    { text: "Bonés", link: "/" },
    { text: "Headphones", link: "/" },
    { text: "Tênis", link: "/" },

  ];

  const contact = [
    { text: <>Av. Santos Dumont, 1510 - 1 andar<br/> - Aldeota, Fortaleza - CE, 60150-161</>, link: "/" },
    { text: "(85) 3051-3411", link: "/" },
  
  ];
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__column">
          <div className="footer-content__column-main">
            <Logo/>
            <p>
              Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Deleniti debitis<br/> consectetur alias, esse laudantium
            </p>
            <div className="footer-content__column-main--medias">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>

            </div>

          </div>
          <div className="footer-content__column-secondary">
            <div className="footer-content__column-informations">
              <FooterColumn title="Informações" informations={informations} />             
            </div>
            <div className="footer-content__column-categorys">
              <FooterColumn title="Categorias" informations={categorys} />
            </div>
            <div className="footer-content__column-contacts">
                <FooterColumn title="Contato" informations={contact} />
            </div>
          </div>
        </div>
        <div className="footer-content__line-and-credits">
          <hr/>
          <p>© 2024 Digital Store - Criado por Victor Fernando</p>
        </div>


      </div>




      
    </footer>
  )
}

export default Footer
