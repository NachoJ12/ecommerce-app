import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h3>{props.greeting}</h3>
      <ItemCount stock={5} initial={1} onAdd />
    </div>
  );
};

export default ItemListContainer;
