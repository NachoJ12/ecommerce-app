import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import style from './CartWidget.module.css';

const CartWidget = () => {
  const resultContext = useContext(cartContext);
  console.log('ContextEnCartWidget', resultContext);

  return (
    <NavLink to="/cart" className={style.cartContainer}>
      <span className={style.cart + ' material-symbols-outlined'}>
        shopping_cart
      </span>{' '}
      {resultContext.totalQuantity}
    </NavLink>
  );
};

//<div className={style.cartContainer}></div>

export default CartWidget;
