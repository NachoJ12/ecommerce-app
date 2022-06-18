import style from './NavBar.module.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
      <CartWidget />
    </nav>
  );
};

export default NavBar;
