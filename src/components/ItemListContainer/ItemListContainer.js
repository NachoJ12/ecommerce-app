import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import customFetch, { getProductsByCategory } from '../../utils/customFetch';
import productsList from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import { Spinner } from '../Spinner/Spinner';
import style from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!categoryId) {
      customFetch(2000, productsList)
        .then((res) => {
          setItems(res);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      getProductsByCategory(categoryId)
        .then((res) => {
          setItems(res);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <div className={style.container}>
      <h3>{props.greeting}</h3>
      {loading ? (
        <Spinner />
      ) : items.length <= 0 ? (
        <>
          <p>No hay productos para esta categoria</p>
          <Link to="/">
            <button>Ir al home</button>
          </Link>
        </>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
