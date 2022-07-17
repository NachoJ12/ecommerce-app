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

  const mockNameUser = 'Carlos Nacho';

  const dropdownUserMouseOver = (e) => {
    const btnDepartamentos = document.getElementById('btn-departamentos');
    const grid = document.getElementById('grid');
    const grid2 = document.getElementById('grid2');
    //console.log(e.target);
    console.log(grid);

    grid.classList.add(`${style.gridActivo}`);
    grid2.classList.add(`${style.gridActivo}`);
  };

  const dropdownUserMouseLeave = () => {
    const btnDepartamentos = document.getElementById('btn-departamentos');
    const grid = document.getElementById('grid');
    const grid2 = document.getElementById('grid2');

    //console.log(e.target);
    console.log(grid);

    grid.classList.remove(`${style.gridActivo}`);
    grid2.classList.remove(`${style.gridActivo}`);
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
          <div
            className={`${style.userLoggedIn}  ${style.contenedorEnlacesNav}`}
          >
            <div
              onMouseOver={dropdownUserMouseOver}
              onMouseLeave={dropdownUserMouseLeave}
              className={`${style.btnDepartamentos}`}
              id="btn-departamentos"
            >
              <span className={`material-symbols-outlined ${style.userIcon}`}>
                person
              </span>
              <small className={style.smallTextName}>{mockNameUser}</small>
              {/*prueba*/}
              <div className={style.grid2} id="grid2">
                {/* aca arranca */}
                <div className={`${style.contenedor} ${style.contenedorGrid} `}>
                  <div className={style.grid} id="grid">
                    <div className={style.categorias}>
                      <a href="#profile" className={style.categoriasLink}>
                        Profile
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </a>

                      <a href="#logout" className={style.categoriasLink}>
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
