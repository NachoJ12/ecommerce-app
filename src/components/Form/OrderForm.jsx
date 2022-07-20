import React from 'react';
import style from './OrderForm.module.css';

const OrderForm = ({ handleChange, userData, handleSubmit, handleBuy }) => {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]{6,11}$/g;

  return (
    <div>
      <form className={style.orderForm} onSubmit={handleSubmit}>
        <div className={style.contenedorInput}>
          <label className={style.label}>Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
            value={userData.name}
            required
          ></input>
        </div>
        <div className={style.contenedorInput}>
          <label className={style.label}>Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            name="lastName"
            onChange={handleChange}
            value={userData.lastName}
            required
          ></input>
        </div>
        <div className={style.contenedorInput}>
          <label className={style.label}>Teléfono</label>
          <input
            type="text"
            placeholder="Teléfono"
            name="phone"
            onChange={handleChange}
            value={userData.phone}
            required
          ></input>
        </div>
        <div className={style.contenedorInput}>
          <label className={style.label}>E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={userData.email}
            required
          ></input>
        </div>
        <div className={style.contenedorInput}>
          <label className={style.label}>Confirmar e-mail</label>
          <input
            type="email"
            placeholder="Confirmar e-mail"
            name="confirmEmail"
            id="confirmEmail"
            onChange={handleChange}
            value={userData.confirmEmail}
            required
          ></input>
        </div>
        {/* Todos los inputs completos correctamente, habilitamos boton para proceder con el pago */}
        {userData.name &&
        userData.lastName &&
        userData.phone &&
        userData.email === userData.confirmEmail &&
        phoneRegex.test(userData.phone) &&
        emailRegex.test(userData.email, userData.confirmEmail) ? (
          <button className={style.btnToPay}>Realizar compra</button>
        ) : (
          <button className={style.btnToPay} disabled>
            Realizar compra
          </button>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
