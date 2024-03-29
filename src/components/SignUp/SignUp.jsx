import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { Spinner } from '../Spinner/Spinner';
import style from './SignUp.module.css';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validatePassword() !== true) {
      return;
    }
    try {
      const responseUser = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      setLoading(true);
      await addDoc(collection(db, 'usuarios'), {
        name: userData.name,
        lastName: userData.lastName,
        email: userData.email,
        userId: responseUser.user.uid,
      });
      setLoading(false);
      toast.success('Registro exitoso');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      if (error.code === 'auth/weak-password') {
        toast.error('La contraseña debe tener al menos 6 caracteres');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('E-mail ya en uso');
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validatePassword = () => {
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('passwordRepeat');
    if (pass1.value === pass2.value) {
      return true;
    } else if (pass1.value.length < 6) {
      toast.error('Debe ingresar una contraseña de más de 6 caracteres');
      pass1.focus();
      return false;
    } else if (pass1.value !== pass2.value) {
      toast.error('Las contraseñas no coinciden');
      pass2.focus();
      return false;
    } else {
      return false;
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={style.contenedorFormulario}>
          <h1 className={style.titleOutsideForm}>Registrarse</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.filaArriba}>
              <div className={style.contenedorInput}>
                <label className={style.label}>
                  Nombre <span className={style.req}>*</span>
                </label>
                <input
                  type="text"
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
                <label className={style.label}>
                  Apellido <span className={style.req}>*</span>
                </label>
                <input
                  type="text"
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
              <label className={style.label}>
                Email <span className={style.req}>*</span>
              </label>
              <input
                type="email"
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
              <label className={style.label}>
                Contraseña <span className={style.req}>*</span>
              </label>
              <input
                type="password"
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
              <label className={style.label}>
                Repetir contraseña <span className={style.req}>*</span>
              </label>
              <input
                type="password"
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
      )}
    </div>
  );
};

export default SignUp;
