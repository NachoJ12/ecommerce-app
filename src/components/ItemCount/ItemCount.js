import React, { useState } from 'react';
import { toast } from 'react-toastify';
import style from './ItemCount.module.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const confirmCount = () => {
    onAdd(count);
    if (count === 1) {
      toast.success(`Se ha agregado ${count} producto a su carrito`);
    } else {
      toast.success(`Se han agregado ${count} productos a su carrito`);
    }
  };
  return (
    <div className={style.itemCountContainer}>
      <div className={style.itemTrigger}>
        <div className={style.itemCount}>
          <button
            onClick={decreaseCount}
            className={style.btnCounts}
            disabled={count === 1 ? true : false}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={increaseCount}
            className={style.btnCounts}
            disabled={count === stock ? true : false}
          >
            +
          </button>
        </div>
      </div>
      <button onClick={confirmCount} className={style.addToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
