import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import CatalogPage from './components/pages/Catalog';
import CartPage from './components/pages/Cart';
import ItemPage from './components/pages/Item';
import { useState, useEffect } from 'react';
import { banksData } from './components/pages/catalog-logic/logic';
import axios from "axios";
import { loadingGif } from './images/exporter';
import { getBanks } from './components/api';
import { Provider } from 'react-redux';
import { persistor, store } from './components/store';
import CheckoutPage from './components/pages/Checkout';
import SuccessPage from './components/pages/Success';
import LoginPage from './components/pages/LogIn';
import RegisterPage from './components/pages/Register';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  const [banks, setBanks] = useState([]);
  const [catalogSearch, setCatalogSearch] = useState("");
  const handleCatalogSearchChange = (event) => {
    setCatalogSearch(event.target.value);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    getBanks().then((bankData) => setBanks(bankData));
  }, []);

  if (user) {
    if (banks && banks.length) {
        return (
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Header catalogSearchChange={handleCatalogSearchChange} user={user} setUser={setUser} />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/catalog" element={<CatalogPage banks={banks} catalogSearch={catalogSearch} />} />
                  <Route path="/bank/:id" element={<ItemPage banks={banks} />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/success" element={<SuccessPage />} />
                  <Route path="/login" element={<Navigate to={"/"} />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </PersistGate>
          </Provider>
        );
    } else {
      return (
        <div style={{ height: '100vh', display: 'flex' }}>
          <img src={loadingGif} style={{margin: '0 auto'}}></img>
        </div>
      );
    }
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
