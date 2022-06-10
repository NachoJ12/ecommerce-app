const customFetch = (time, task) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(task);
    }, time);
  });
};

export default customFetch;
