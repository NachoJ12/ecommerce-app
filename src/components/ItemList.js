import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
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
