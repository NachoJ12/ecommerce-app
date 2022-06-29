import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import style from './ItemDetail.module.css';

const ItemDetail = ({ id, title, description, pictureUrl, price, stock }) => {
  const [amount, setAmount] = useState(0);
  const resultContext = useContext(cartContext);
  //console.log('ContextItemDetail', resultContext);

  const onAdd = (selectedQuantity) => {
    setAmount(selectedQuantity);
  };

  const agregarAlCarrito = () => {
    resultContext.addItem({ id, title, price, pictureUrl }, amount);
  };

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
          <>
            {amount < 1 ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <button
                  onClick={agregarAlCarrito}
                  className={style.finishPurchase}
                >
                  Terminar mi compra
                </button>
              </Link>
            )}
          </>
        ) : (
          <p className={style.outOfStock}>Sin stock</p>
        )}
      </>
    </div>
  );
};

export default ItemDetail;
