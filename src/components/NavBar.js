import './NavBar.css';
import logo from '../logo.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="brand">
        <img src={logo} alt="logo" />
        <h2 className="nameEcommerce">Electro App</h2>
      </div>
      <ul>
        <li>
          <a href="#electrodomesticos">Electrodomésticos</a>
        </li>
        <li>
          <a href="#informatica">Informática</a>
        </li>
        <li>
          <a href="#celulares">Celulares</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
