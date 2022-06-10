import React, { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import productsList from '../utils/products';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, productsList)
      .then((res) => setItems(res))
      .catch((err) => console.log(err));
  }, [items]);
  console.log(items);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h3>{props.greeting}</h3>
      <ItemCount stock={5} initial={1} onAdd />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
