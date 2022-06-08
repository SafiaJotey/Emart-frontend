// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
//update => marge data =new data + old data
const updateDb = (cart) => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
};
//getDb
const getDb = () => localStorage.getItem('shopping-cart'); //will return stringify object;

const getStoreCart = () => {
  const exist = getDb();
  return exist ? JSON.parse(exist) : {}; //will return js object
};

const removeFromDb = (id) => {
  const storedCart = getDb();
  if (!storedCart) {
    return;
  } else {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      updateDb(shoppingCart);
    }
  }
};

const clearCart = () => {
  localStorage.removeItem('shopping-cart');
};

export { getStoreCart, addToDb, removeFromDb, clearCart };
