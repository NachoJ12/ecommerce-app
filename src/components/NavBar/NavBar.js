import style from './NavBar.module.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const mockOfContextUserLogin = true;
  const mockNameUser = 'Nacho';
  return (
    <nav className={style.navBar}>
      <Link to="/">
        <div className={style.brand}>
          <img src={logo} alt="Logo Electro App" />
          <h2 className={style.nameEcommerce}>Electro App</h2>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/category/electrodomesticos">Electrodomésticos</Link>
        </li>
        <li>
          <Link to="/category/informatica">Informática</Link>
        </li>
        <li>
          <Link to="/category/celulares">Celulares</Link>
        </li>
      </ul>
      <div className={style.navContainerG3}>
        {mockOfContextUserLogin ? (
          <div className={style.userLoggedIn}>
            <span className={`material-symbols-outlined ${style.userIcon}`}>
              person
            </span>
            <small className={style.smallFontSize}>{mockNameUser}</small>
          </div>
        ) : (
          <div className={style.userNotLoggedIn}>
            <span className={`material-symbols-outlined ${style.userIcon}`}>
              <Link to="/login">person</Link>
            </span>

            {/* <Link to="/signup">Registro</Link>
            <Link to="/login">Ingresar</Link> */}
          </div>
        )}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
