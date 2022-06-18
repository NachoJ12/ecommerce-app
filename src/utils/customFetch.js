import productsList from './products';

const customFetch = (time, task) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(task);
    }, time);
  });
};

export const getProductsById = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productsList.find((product) => product.id === id));
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        productsList.filter(
          (product) => product.categoryId === categoryId
          //(products) => products.categoryId === parseInt(categoryId)
        )
      );
    }, 2000);
  });
};

export default customFetch;
