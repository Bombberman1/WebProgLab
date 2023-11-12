import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import CatalogPage from './components/pages/Catalog';
import CartPage from './components/pages/Cart';
import ItemPage from './components/pages/Item';
import { useState } from 'react';
import { banksData } from './components/pages/catalog-logic/logic';

function App() {

  const [banks, setBanks] = useState(banksData);
  const [catalogSearch, setCatalogSearch] = useState("");
  const handleCatalogSearchChange = (event) => {
    setCatalogSearch(event.target.value);
  };

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
}

export default App;
