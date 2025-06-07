import React from 'react';
import starIcon from '../assets/star-icon.svg';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children
}) => {
  const hasDiscount = priceDiscount !== undefined;

  return (
    <div className="Buybox">
      <h1 className="Buybox__product-name">{name}</h1>
      <p className="Buybox__product-reference">REF: {reference}</p>

      <div className="Buybox__product-rating">
        <div className="Buybox__product-rating--stars-box">
          {stars}
          <img src={starIcon} alt="star" className="Buybox__product-rating--star-icon" />
        </div>
        <span className="Buybox__product-rating-rating-count">({rating} avaliações)</span>
      </div>

      <div className="BuyBox__product-price">
        {hasDiscount ? (
          <>
            <span className="BuyBox__product-price-original-price">{price}</span>
            <span className="BuyBox__product-price-discounted-price">{priceDiscount}</span>
          </>
        ) : (
          <span className="BuyBox__product-price-regular-price">{price}</span>
        )}
      </div>

      <p className="BuyBox__product-price-product-description">Descrição do produto:</p>
      <p className="BuyBox__product-price-product-description-text">{description}</p>

      {children && <div className="BuyBox__product-product-children">{children}</div>}

      <button className="Buybox__buy-button">Comprar</button>
    </div>
  );
};

export default BuyBox;
