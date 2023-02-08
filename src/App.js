import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Layout from './components/Layout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
  //state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toastIsShown, setToastIsShown] = useState(false);

  console.log('products:', products);
  // functions
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setHasError(true);
      });
  }, []);

  function addProductToCart(clickedProduct) {
    console.log('clicked product', clickedProduct);

    setCart(prev => {
      const isItemInCart = prev.find(item => item.id === clickedProduct.id);
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedProduct.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedProduct, amount: 1 }];
    });
    /* setCart(prev => (
      [...prev, {...clickedProduct, amount: 1}]
    )) */
    setToastIsShown(true);
    setTimeout(() => {
      setToastIsShown(false);
    }, 1500);
  }

  function getTotalItems(cartItems) {
    return cartItems.reduce((ack, item) => ack + item.amount, 0);
  }

  return (
    <>
      <Router>
        <Switch>
          <Layout cartItems={cart} getTotalItems={getTotalItems}>
            <Route exact path="/">
              <Home
                toastIsShown={toastIsShown}
                products={products}
                addProductToCart={addProductToCart}
                hasError={hasError}
                isLoading={isLoading}
              />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </>
  );
}
