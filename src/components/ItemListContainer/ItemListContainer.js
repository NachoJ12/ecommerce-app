import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import productsList from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import style from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, productsList)
      .then((res) => setItems(res))
      .catch((err) => console.log(err));
  }, [items]);

  return (
    <div className={style.container}>
      <h3>{props.greeting}</h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
