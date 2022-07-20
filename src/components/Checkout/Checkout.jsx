import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import OrderForm from '../Form/OrderForm';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import style from './Chekout.module.css';
import { userContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const Checkout = () => {
  const userContextResult = useContext(userContext);
  const resultContext = useContext(cartContext);
  console.log('userContextResult', userContextResult);
  const userLoggedIn = userContextResult.userLogin;

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: userLoggedIn ? userContextResult.userInfo.email : '',
    confirmEmail: '',
  });
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    if (userLoggedIn) {
      toast.info(`Vas a comprar como: ${userContextResult.userInfo.email}`);
    }
  }, []);

  let cartCheckout = [];
  resultContext.carrito.forEach((element) => {
    cartCheckout.push({
      id: element.id,
      title: element.title,
      price: element.price,
      quantity: element.quantity,
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    const target = e.target;
    const label = target.parentElement.children[0];
    if (value === '') {
      label.classList.remove(`${style.activateLabel}`);
    } else if (value !== '') {
      label.classList.add(`${style.activateLabel}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartCheckout.length < 1) {
      toast.error(
        'No hay nada agregado al carrito. Por favor seleccione el producto que desea'
      );
      return;
    }
    const orderData = {
      buyer: {
        name: userData.name,
        lastName: userData.lastName,
        phone: userData.phone,
        email: userData.email,
      },
      items: cartCheckout,
      total: resultContext.totalPrice,
      date: serverTimestamp(),
    };

    const collectionOrders = collection(db, 'orders');
    addDoc(collectionOrders, orderData)
      .then((response) => {
        setOrderId(response.id);
        resultContext.clear();
        toast.success('Compra exitosa');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {orderId !== '' ? (
        <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>
      ) : (
        <div className={style.containerCheckout}>
          <h1 className={style.titleCheckout}>Checkout</h1>
          <div className={style.grid2}>
            <div>
              <h2 className={style.subtitleCheckout}>Resumen de compra</h2>
              <div className={style.summaryBox}>
                <p>Items: {resultContext.totalQuantity}</p>
                <p>Envio: ¡Gratis!</p>
                <p>Total: ${resultContext.totalPrice}</p>
              </div>
              <Link to="/cart" className={style.backToCart}>
                <span className="material-symbols-outlined">arrow_back</span>
                Volver al carrito
              </Link>
            </div>
            <div>
              <h2 className={style.subtitleCheckout}>
                Detalles de facturación
              </h2>
              <OrderForm
                handleChange={handleChange}
                userData={userData}
                handleSubmit={handleSubmit}
                logged={userLoggedIn}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
