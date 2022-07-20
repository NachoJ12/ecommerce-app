import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import OrderForm from '../Form/OrderForm';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import style from './Chekout.module.css';
import { userContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const userContextResult = useContext(userContext);
  const resultContext = useContext(cartContext);
  console.log('userContextResult', userContextResult);
  const userLoggedIn = userContextResult.userLogin;
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: /*userContextResult.userInfo.email ||*/ '',
    confirmEmail: '',
  });
  const [orderId, setOrderId] = useState('');

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Revisar esta funcion ya no sirve, valido desde el form */
    const confirmEmail = document.getElementById('confirmEmail');
    if (userData.email !== confirmEmail.value) {
      confirmEmail.focus();
      alert('los mails deben coincidir');
      return;
    }
    /* Fin funcion anterior */
    if (cartCheckout.length < 1) {
      alert(
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {orderId !== '' ? (
        <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>
      ) : userLoggedIn ? (
        <div>Comprar como xxx@gmail.com</div>
      ) : (
        <div
          className={`${style.containerCheckout}`}
          style={{ textAlign: 'initial' }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Checkout</h2>
          <div className={style.grid2}>
            <div>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                Resumen de compra
              </h2>
              <div
                style={{
                  border: '1px solid rgb(229 231 235)',
                  borderRadius: '5px',
                  padding: '0.8rem',
                }}
              >
                <p>Items: {resultContext.totalQuantity}</p>
                <p>Envio: ¡Gratis!</p>
                <p>Total: ${resultContext.totalPrice}</p>
              </div>
              <Link
                to="/cart"
                style={{
                  fontSize: '1rem',
                  display: 'flex',
                  color: 'grey',
                }}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Volver al carrito
              </Link>
            </div>
            <div>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                Detalles de facturación
              </h2>
              <OrderForm
                handleChange={handleChange}
                userData={userData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
