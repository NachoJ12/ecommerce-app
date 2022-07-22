import React from 'react';
import style from './Footer.module.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.social}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <p className={style.copyright}>© Copyright 2022. All Rights Reserved</p>
        <div className={style.icons}>
          <a href="https://www.linkedin.com/in/nachojustel/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/NachoJ12">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
