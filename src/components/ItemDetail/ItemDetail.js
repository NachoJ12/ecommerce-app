import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import style from './ItemDetail.module.css';

const ItemDetail = ({ item }) => {
  // Verificar que efectivamente haya stock para el initial iniciarlo en 1
  return (
    <div className={style.card}>
      <img src={item.pictureUrl} alt={item.title} className={style.imgItem} />
      <div className={style.container}>
        <h1>{item.title}</h1>
        <h3>Product Detail</h3>
        <p>{item.description}</p>
        <p className={style.price}>${item.price}</p>
      </div>
      <ItemCount stock={item.stock} initial={1} onAdd />
    </div>
  );
};

export default ItemDetail;
