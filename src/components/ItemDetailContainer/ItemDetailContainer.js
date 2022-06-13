import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const product = {
    id: 2,
    title: 'Celular Samsung M12',
    description: 'Descripcion del Celular Samsung M12',
    price: 799.99,
    pictureUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxJ_B-E1e3w8Tk6hWmTTtohjno2SAvYam_F1R61QLI4Sjm3nz6PccdHfjCOKUo9MYoT8&usqp=CAU',
    stock: 3,
  };

  useEffect(() => {
    customFetch(2000, product)
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  });

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
