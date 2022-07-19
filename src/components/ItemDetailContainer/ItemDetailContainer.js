import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../config/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from '../Spinner/Spinner';
import { toast } from 'react-toastify';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(collection(db, 'products'), id))
      .then((res) => {
        console.log(res.data(), res.id);
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [id]);

  return (
    <div>
      {Object.keys(item).length === 0 ? <Spinner /> : <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;
