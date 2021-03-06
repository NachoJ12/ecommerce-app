import React from 'react';
import Item from '../Item/Item';
import style from './ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          pictureUrl={item.pictureUrl}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ItemList;
