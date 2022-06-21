// use local storage to manage cart data
const addToDb = (id, count) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + count;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = count;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
const getStoreCart = () => {
  const exist = localStorage.getItem('shopping-cart');
  return exist ? JSON.parse(exist) : {};
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
};

const clearTheCart = () => {
  localStorage.removeItem('shopping-cart');
};

export { addToDb, getStoreCart, removeFromDb, clearTheCart };
