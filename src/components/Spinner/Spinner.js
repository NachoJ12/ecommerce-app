import React from 'react';
import style from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={style.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
