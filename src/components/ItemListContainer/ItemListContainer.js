import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { Spinner } from '../Spinner/Spinner';
import style from './ItemListContainer.module.css';
import { db } from '../../config/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const ref = categoryId
      ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
      : collection(db, 'products');

    getDocs(ref)
      .then((res) => {
        const productsMap = res.docs.map((doc) => {
          const aux = doc.data();
          aux.id = doc.id;
          return aux;
        });
        setItems(productsMap);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [categoryId]);

  return (
    <div className={style.container}>
      <h1 className={style.titleGreeting}>{props.greeting}</h1>
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
