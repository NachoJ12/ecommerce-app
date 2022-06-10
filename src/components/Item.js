import React from 'react';
import './Item.css';

const Item = ({ id, title, description, pictureUrl, price }) => {
  return (
    <div className="card" key={id}>
      <h2>{title}</h2>
      <div className="container">
        <img src={pictureUrl} alt={title} className="img-item" />
        <p>{description}</p>
        <p>${price}</p>
        <button className="seeDetail">Ver detalle del producto</button>
      </div>
    </div>
  );
};

export default Item;
