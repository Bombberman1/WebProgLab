import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import CatalogPage from './components/pages/Catalog';
import CartPage from './components/pages/Cart';
import ItemPage from './components/pages/Item';
import { useState, useEffect } from 'react';
import { banksData } from './components/pages/catalog-logic/logic';
import axios from "axios";
import { loadingGif } from './images/exporter';
import { getBanks } from './components/api';

function App() {

  const [banks, setBanks] = useState([]);
  const [catalogSearch, setCatalogSearch] = useState("");
  const handleCatalogSearchChange = (event) => {
    setCatalogSearch(event.target.value);
  };

  useEffect(() => {
    getBanks().then((bankData) => setBanks(bankData));
  }, []);

  if (banks.length) {
    return (
      <BrowserRouter>
        <Header catalogSearchChange={handleCatalogSearchChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage banks={banks} catalogSearch={catalogSearch} />} />
          <Route path="/bank/:id" element={<ItemPage banks={banks} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <img src={loadingGif} style={{margin: '0 auto'}}></img>
      </div>
    );
  }
  
}

export default App;
