import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- Importa Link aqui
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { GallerySlidesListing } from "../database/GallerySlidesListing.js";
import { GalleryThumbnails } from "../database/GalleryThumbnails.js";

const Gallery = ({
  className = "",
  width = "100%",
  height = "100vh",
  radius = "4px",
  showThumbs
}) => {
  const slides = GallerySlidesListing.map((item) => item.image);
  const thumbs = GalleryThumbnails.map((item) => item.image);

  const [currentSlideImage, setCurrentSlideImage] = useState(slides[0]);

  const goToNext = () => {
    const currentIndex = slides.indexOf(currentSlideImage);
    if (currentIndex < slides.length - 1) {
      setCurrentSlideImage(slides[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    const currentIndex = slides.indexOf(currentSlideImage);
    if (currentIndex > 0) {
      setCurrentSlideImage(slides[currentIndex - 1]);
    }
  };

  const handleThumbnailClick = (image) => {
    setCurrentSlideImage(image);
  };

  return (
    <div className={`gallery-container ${className}`} style={{ width }}>
      <div className="gallery-slide">
        <img
          src={currentSlideImage}
          alt="Slide atual"
        />

        {/* Link Ver Mais no slide principal */}
        <Link
          to="/produtos"
          className=".gallery-main-link"
        >
          Ver ofertas
        </Link>

        {/* Seta esquerda */}
        <button
          onClick={goToPrevious}
          disabled={slides.indexOf(currentSlideImage) === 0}
          style={{
            cursor:
              slides.indexOf(currentSlideImage) === 0 ? "not-allowed" : "pointer",
            opacity: slides.indexOf(currentSlideImage) === 0 ? 0.3 : 1
          }}
        >
          <img src={arrowLeft} alt="Anterior" />
        </button>

        {/* Seta direita */}
        <button
          onClick={goToNext}
          disabled={slides.indexOf(currentSlideImage) === slides.length - 1}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor:
              slides.indexOf(currentSlideImage) === slides.length - 1
                ? "not-allowed"
                : "pointer",
            opacity: slides.indexOf(currentSlideImage) === slides.length - 1 ? 0.3 : 1
          }}
        >
          <img src={arrowRight} alt="Próxima" />
        </button>
      </div>

      {/* Miniaturas */}
      {showThumbs && (
        <div
          className="gallery-thumbs"
        >
          {thumbs.map((thumbImage, index) => (
            <div
              key={index}
              className="gallery-thumb-item"
              onClick={() => handleThumbnailClick(thumbImage)}
            >
              <img
                src={thumbImage}
                alt={`Thumb ${index + 1}`}
              />

              {/* Link Ver mais visível apenas se esta thumb estiver ativa */}
              {currentSlideImage === thumbImage && (
                <Link
                  to="/produtos"
                  className=".thumb-link"
                >
                  Ver mais
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
