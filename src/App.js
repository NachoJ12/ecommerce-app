import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserContextProvider from './context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer
        style={{ position: 'absolute', left: '10px', top: '90px' }}
        limit={1}
      />
      <BrowserRouter>
        <UserContextProvider>
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
              <Route path="/login" element={<Login />} />
            </Routes>
          </CartContextProvider>
        </UserContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
