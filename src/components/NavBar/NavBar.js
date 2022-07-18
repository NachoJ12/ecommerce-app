import style from './NavBar.module.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/UserContext';

const NavBar = () => {
  const userContextResult = useContext(userContext);
  //console.log('userCntxResult', userContextResult);
  const logueado = userContextResult.userLogin;
  //console.log('logueado', logueado);
  //console.log('userContext', userContextResult);

  const mockNameUser = 'Carlos Nacho';

  const dropdownUserMouseOver = (e) => {
    const btnUserLoggedIn = document.getElementById('btn-user-loggedIn');
    const dropdownContainer = document.getElementById('dropdownContainer');
    const occultDropdown = document.getElementById('extendOccultDropdown');
    //console.log(e.target);
    //console.log(dropdownContainer);

    dropdownContainer.classList.add(`${style.gridActive}`);
    occultDropdown.classList.add(`${style.gridActive}`);
  };

  const dropdownUserMouseLeave = () => {
    const btnUserLoggedIn = document.getElementById('btn-user-loggedIn');
    const dropdownContainer = document.getElementById('dropdownContainer');
    const occultDropdown = document.getElementById('extendOccultDropdown');

    //console.log(e.target);
    //console.log(dropdownContainer);

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
        {/* ${style.contenedor} */}
        {logueado ? (
          <div className={`${style.userLoggedIn}  ${style.navLinkContainer}`}>
            <div
              onMouseOver={dropdownUserMouseOver}
              onMouseLeave={dropdownUserMouseLeave}
              className={`${style.btnUserLoggedIn}`}
              id="btn-user-loggedIn"
            >
              <span className={`material-symbols-outlined ${style.userIcon}`}>
                person
              </span>
              <small className={style.smallTextName}>{mockNameUser}</small>
              {/*prueba*/}
              <div
                className={style.extendOccultDropdown}
                id="extendOccultDropdown"
              >
                {/* aca arranca */}
                <div className={`${style.dropdownPositionContainer}`}>
                  <div
                    className={style.dropdownContainer}
                    id="dropdownContainer"
                  >
                    <div className={style.categories}>
                      <a href="#profile" className={style.categoriesLink}>
                        Profile
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </a>

                      <a href="#logout" className={style.categoriesLink}>
                        Logout
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* aca termina */}
              </div>
              {/*fin prueba*/}
            </div>
          </div>
        ) : (
          // <div className={style.userLoggedIn}>
          //   <span className={`material-symbols-outlined ${style.userIcon}`}>
          //     person
          //   </span>
          //   <small className={style.smallFontSize}>{mockNameUser}</small>
          // </div>
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
