import React, { useState } from 'react';
import style from './SignUp.module.css';

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handlerMultiple = (e) => {
    const target = e.target;
    const label = target.parentElement.children[0];
    const spanReq = label.children[0];

    if (e.type === 'keyup') {
      if (target.value === '') {
        label.classList.remove(`${style.activeLabel}`, `${style.highLight}`);
        spanReq.classList.remove(`${style.opacityCero}`);
      } else {
        label.classList.add(`${style.activeLabel}`, `${style.highLight}`);
        spanReq.classList.add(`${style.opacityCero}`);
      }
    } else if (e.type === 'blur') {
      if (target.value === '') {
        label.classList.remove(`${style.activeLabel}`, `${style.highLight}`);
      } else {
        label.classList.remove(`${style.highLight}`);
      }
    } else if (e.type === 'focus') {
      if (e.target.value === '') {
        label.classList.remove(`${style.highLight}`);
      } else if (e.target.value !== '') {
        label.classList.add(`${style.highLight}`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validatePassword = () => {
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('passwordRepeat');
    if (pass1.value.length < 6) {
      alert('Debe ingresar una contraseña de más de 6 caracteres');
      pass1.focus();
      return false;
    } else if (pass1.value !== pass2.value) {
      alert('Las contraseñas no coinciden');
      pass2.focus();
      return false;
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>{' '}
      <div className={style.contenedorFormulario}>
        <form onSubmit={handleSubmit}>
          <div className={style.filaArriba}>
            <div className={style.contenedorInput}>
              <label>
                Nombre <span className={style.req}>*</span>
              </label>
              <br />
              <input
                type="text"
                /*placeholder="Nombre"*/
                name="name"
                onChange={handleChange}
                onFocus={handlerMultiple}
                onBlur={handlerMultiple}
                onKeyUp={handlerMultiple}
                value={userData.name}
                required
              ></input>
            </div>
            <div className={style.contenedorInput}>
              <label>
                Apellido <span className={style.req}>*</span>
              </label>
              <br />
              <input
                type="text"
                // placeholder="Apellido"
                name="lastName"
                onChange={handleChange}
                onFocus={handlerMultiple}
                onBlur={handlerMultiple}
                onKeyUp={handlerMultiple}
                value={userData.lastName}
                required
              ></input>
            </div>
          </div>
          <div className={style.contenedorInput}>
            <label>
              Email <span className={style.req}>*</span>
            </label>
            <br />
            <input
              type="email"
              //   placeholder="Email"
              name="email"
              onChange={handleChange}
              onFocus={handlerMultiple}
              onBlur={handlerMultiple}
              onKeyUp={handlerMultiple}
              value={userData.email}
              required
            ></input>
          </div>

          <div className={style.contenedorInput}>
            <label>
              Contraseña <span className={style.req}>*</span>
            </label>
            <br />
            <input
              type="password"
              //   placeholder="Contraseña"
              name="password"
              id="password"
              onChange={handleChange}
              onFocus={handlerMultiple}
              onBlur={handlerMultiple}
              onKeyUp={handlerMultiple}
              value={userData.password}
              required
            ></input>
          </div>
          <div className={style.contenedorInput}>
            <label>
              Repetir contraseña <span className={style.req}>*</span>
            </label>
            <br />
            <input
              type="password"
              //   placeholder="Repetir contraseña"
              name="passwordRepeat"
              id="passwordRepeat"
              onChange={handleChange}
              onFocus={handlerMultiple}
              onBlur={handlerMultiple}
              onKeyUp={handlerMultiple}
              required
            ></input>
          </div>

          <button className={`${style.button} ${style.buttonBlock}`}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
