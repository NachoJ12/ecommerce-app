import style from './NavBar.module.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/UserContext';

const NavBar = () => {
  const userContextResult = useContext(userContext);

  const logueado = userContextResult.userLogin;

  const dropdownUserMouseOver = () => {
    const dropdownContainer = document.getElementById('dropdownContainer');
    const occultDropdown = document.getElementById('extendOccultDropdown');

    dropdownContainer.classList.add(`${style.gridActive}`);
    occultDropdown.classList.add(`${style.gridActive}`);
  };

  const dropdownUserMouseLeave = () => {
    const dropdownContainer = document.getElementById('dropdownContainer');
    const occultDropdown = document.getElementById('extendOccultDropdown');

    dropdownContainer.classList.remove(`${style.gridActive}`);
    occultDropdown.classList.remove(`${style.gridActive}`);
  };

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
        {logueado ? (
          <div className={`${style.userLoggedIn}  ${style.navLinkContainer}`}>
            <div
              onMouseOver={dropdownUserMouseOver}
              onMouseLeave={dropdownUserMouseLeave}
              className={`${style.btnUserLoggedIn}`}
            >
              <span className={`material-symbols-outlined ${style.userIcon}`}>
                person
              </span>
              <small className={style.smallTextName}>
                {`${userContextResult.userInfo.name}`}
              </small>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1rem' }}
              >
                expand_more
              </span>
              {/* aca arranca */}
              <div
                className={style.extendOccultDropdown}
                id="extendOccultDropdown"
              >
                <div className={`${style.dropdownPositionContainer}`}>
                  <div
                    className={style.dropdownContainer}
                    id="dropdownContainer"
                  >
                    <div className={style.categories}>
                      <Link
                        onClick={userContextResult.logoutUser}
                        to="/"
                        className={style.categoriesLink}
                      >
                        Logout
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* aca termina */}
            </div>
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
