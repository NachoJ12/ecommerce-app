import React, { createContext, useState } from 'react';

export const userContext = createContext();

const Provider = userContext.Provider;

const UserContextProvider = (props) => {
  const [userLogin, setUserLogin] = useState(
    localStorage.getItem('login') /*false*/
  ); // Si le pongo false, inicia siempre en false el estado. Ahora con el localStorage, lo que hace es obtener el item clave/valor de "login" del localStorage, y si es true lo muestra como logueado y sino no.
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const loginUser = (user) => {
    setUserLogin(true);
    localStorage.setItem('login', true);
    setUserInfo(user);
    localStorage.setItem('user', JSON.stringify(user));
  };
  const logoutUser = () => {
    setUserLogin(false);
    localStorage.removeItem('login');
    setUserInfo();
    localStorage.removeItem('user');
  };

  return (
    <Provider value={{ userLogin, loginUser, logoutUser, userInfo }}>
      {props.children}
    </Provider>
  );
};

export default UserContextProvider;
