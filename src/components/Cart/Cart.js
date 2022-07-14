import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import style from './Cart.module.css';

const Cart = () => {
  const resultContext = useContext(cartContext);

  return (
    <>
      {resultContext.carrito.length < 1 ? (
        <div>
          <p className={style.cartEmpty}>Su carrito se encuentra vacio</p>
          <Link to="/" className={style.btnInCart}>
            Ver Productos
          </Link>
        </div>
      ) : (
        <div className={style.column}>
          <div className={style.row}>
            <div className={style.column5Titles}>
              <div></div>
              <h5>Producto</h5>
              <h5>Cantidad</h5>
              <h5>Precio</h5>
              <h5>Subtotal</h5>
            </div>

            <div className={style.row}>
              {resultContext.carrito.map((product) => (
                <div className={style.column5} key={product.id}>
                  <div>
                    <img
                      src={product.pictureUrl}
                      alt={`${product.id} - ${product.title}`}
                      className={style.imgItem}
                    />
                  </div>
                  <div>{product.title}</div>
                  <div>{product.quantity}</div>
                  <div>${product.price}</div>
                  <div>
                    ${parseFloat((product.price * product.quantity).toFixed(2))}
                  </div>
                  <button
                    onClick={() => resultContext.removeItem(product.id)}
                    className={style.deleteItem}
                  >
                    <span
                      class="material-symbols-outlined"
                      style={{ lineHeight: 2 }}
                    >
                      delete
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={style.containerToCheckout}>
            <h2>Resumen de compra</h2>
            <p>Subtotal: ${resultContext.totalPrice}</p>
            <p>Total: ${resultContext.totalPrice}</p>
            <hr></hr>
            <Link to="/checkout">
              <button className={style.btnInCart}>Iniciar compra</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
