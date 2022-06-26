import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    const itemAgregado = {
      ...item,
      quantity: quantity,
    };

    const copiaCarrito = [...carrito];

    if (isInCart(item.id)) {
      copiaCarrito.forEach((element) => {
        if (element.id === item.id) element.quantity += quantity;
      });
      setCarrito(copiaCarrito);
      setTotalQuantity(totalQuantity + quantity);
    } else {
      copiaCarrito.push({ ...itemAgregado });
      setCarrito(copiaCarrito);
      setTotalQuantity(totalQuantity + quantity);
    }
  };

  const removeItem = (itemId) => {};

  const clear = () => {
    setCarrito([]);
    setTotalQuantity(0);
  };

  const isInCart = (idSearch) => {
    return carrito.find(({ id }) => id === idSearch) ? true : false;
  };

  // Initial Provider State
  const stateContext = {
    carrito: carrito,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
    addItem: addItem,
    removeItem: removeItem,
    clear: clear,
  };

  return <Provider value={stateContext}>{props.children}</Provider>;
};

export default CartContextProvider;
