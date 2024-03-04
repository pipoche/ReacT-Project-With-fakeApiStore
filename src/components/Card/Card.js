import React from "react";
import "./card.style.scss";

export default function Card({ product }) {
  return (
      <div className="card">
      <div className="card_image">
        <img src={product.image} alt="imageProduct" />
      </div>
      <div className="card_body">
        <div>
          <p className="card_tilte"> {product.title}</p>
          <span className="card_category">{product.category}</span>
          <span className="card_price">{product.price} $</span>
        </div>
      </div>
      <div className="overlay"></div>
      <button className="btn">Add To Cart</button>
    </div>
  );
}


