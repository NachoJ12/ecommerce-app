import React from 'react';
import style from './CartWidget.module.css';

const CartWidget = () => {
  return (
    <span className={style.cart + ' material-symbols-outlined'}>
      shopping_cart
    </span>
  );
};

export default CartWidget;
