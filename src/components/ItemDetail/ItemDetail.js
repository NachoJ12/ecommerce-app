import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import style from './ItemDetail.module.css';

const ItemDetail = ({ id, title, description, pictureUrl, price, stock }) => {
  return (
    <div className={style.card}>
      <img
        src={pictureUrl}
        alt={`${id} - ${title}`}
        className={style.imgItem}
      />
      <div className={style.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className={style.price}>${price}</p>
      </div>
      <>
        {stock > 0 ? (
          <ItemCount stock={stock} initial={1} onAdd />
        ) : (
          <p className={style.outOfStock}>Sin stock</p>
        )}
      </>
    </div>
  );
};

export default ItemDetail;
