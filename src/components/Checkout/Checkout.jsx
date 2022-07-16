import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import OrderForm from '../Form/OrderForm';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import style from './Chekout.module.css';

export const Checkout = () => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [orderId, setOrderId] = useState('');

  const resultContext = useContext(cartContext);

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

    const orderData = {
      buyer: {
        name: userData.name,
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
      ) : (
        <div className={style.containerCheckout}>
          <h2>Checkout</h2>
          <OrderForm
            handleChange={handleChange}
            userData={userData}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
};
