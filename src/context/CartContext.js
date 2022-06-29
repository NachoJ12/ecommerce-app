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
      setTotalPrice(
        parseFloat((totalPrice + itemAgregado.price * quantity).toFixed(2))
      );
    } else {
      copiaCarrito.push({ ...itemAgregado });
      setCarrito(copiaCarrito);
      setTotalQuantity(totalQuantity + quantity);
      setTotalPrice(
        parseFloat((totalPrice + itemAgregado.price * quantity).toFixed(2))
      );
    }
  };

  const removeItem = (itemId) => {
    const copiaCarrito = [...carrito];
    const decreasePriceAndQuantity = copiaCarrito.find(
      (item) => item.id === itemId
    );
    setTotalPrice(
      parseFloat(
        (
          totalPrice -
          decreasePriceAndQuantity.price * decreasePriceAndQuantity.quantity
        ).toFixed(2)
      )
    );
    setTotalQuantity(totalQuantity - decreasePriceAndQuantity.quantity);

    const newCopiaCarrito = copiaCarrito.filter((item) => item.id !== itemId);
    setCarrito(newCopiaCarrito);
  };

  const clear = () => {
    setCarrito([]);
    setTotalQuantity(0);
    setTotalPrice(0);
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
