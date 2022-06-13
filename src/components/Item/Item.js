import React from 'react';
import style from './Item.module.css';

const Item = ({ id, title, description, pictureUrl, price, stock }) => {
  return (
    <div className={style.card} key={id}>
      <h2>{title}</h2>
      <div className={style.container}>
        <img src={pictureUrl} alt={title} className={style.imgItem} />
        <p>{description}</p>
        <p>${price}</p>
        <button className={style.seeDetail}>Ver detalle del producto</button>
      </div>
    </div>
  );
};

export default Item;
