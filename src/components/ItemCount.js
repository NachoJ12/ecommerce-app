import React, { useState } from 'react';
import './ItemCount.css';

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

  return (
    <div className="itemCountContainer">
      <div className="itemTrigger">
        <div className="itemCount">
          <button
            onClick={decreaseCount}
            className="btn-counts"
            disabled={count === 1 ? true : false}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={increaseCount}
            className="btn-counts"
            disabled={count === stock ? true : false}
          >
            +
          </button>
        </div>
      </div>
      <button className="addToCart">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
