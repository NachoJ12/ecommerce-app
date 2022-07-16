import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { userContext } from '../../context/UserContext';
import style from './Login.module.css';

const Login = () => {
  const context = useContext(userContext);
  const [user, setUser] = useState({
    login_email: '',
    login_password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log('handleSubmit', user);
    setLoading(true);
    e.preventDefault();
    try {
      // Validamos y autenticamos que el email y contraseña sean correctos y existan en la base de datos
      const responseUser = await signInWithEmailAndPassword(
        auth,
        user.login_email,
        user.login_password
      );
      console.log(responseUser);
      setLoading(false);
      console.log('uid', responseUser.user.uid);
      /*const q = query(
        collection(dbFirestore, 'usuarios'),
        where('userId', '==', responseUser.user.uid)
      );
      const querySnapshot = await getDocs(q);*/
      //console.log("usuario", querySnapshot.docs[0]?.data())
      //context.loginUser(querySnapshot.docs[0]?.data()); // Context
      context.loginUser(responseUser.user.uid);
      alert('Bienvenido/a');
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.message);
      if (error.code === 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 caracteres');
      }
    }
  };

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

  return (
    <div>
      <div className={style.contenedorFormulario}>
        <h1 style={{ color: 'white', marginBottom: '2rem' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.contenedorInput}>
            <label className={style.label}>
              Email<span className={style.req}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="login_email"
              onChange={handleChange}
              onFocus={handlerMultiple}
              onBlur={handlerMultiple}
              onKeyUp={handlerMultiple}
              value={user.login_email}
            />
          </div>
          <div className={style.contenedorInput}>
            <label className={style.label}>
              Contraseña<span className={style.req}>*</span>
            </label>
            <input
              className={style.input}
              type="password"
              name="login_password"
              onChange={handleChange}
              onFocus={handlerMultiple}
              onBlur={handlerMultiple}
              onKeyUp={handlerMultiple}
              value={user.login_password}
            />
          </div>

          {/* <div>
            <Link to="#faltaHacerElEnvioDesdeFirebase">
              ¿Has olvidado la contraseña?
            </Link>
          </div> */}

          <button className={`${style.button} ${style.buttonBlock}`}>
            Ingresar
          </button>
        </form>

        {/* <div>
          <Link to="/signup">¿No tienes una cuenta? Regístrate aquí</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
