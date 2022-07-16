import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={'Bienvenido!'} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
