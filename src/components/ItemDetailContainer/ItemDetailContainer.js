import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../utils/customFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductsById(parseInt(id))
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {Object.keys(item).length === 0 ? <Spinner /> : <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;
