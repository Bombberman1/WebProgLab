import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import CatalogPage from './components/pages/Catalog';
import CartPage from './components/pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
