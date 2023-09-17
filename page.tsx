"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { ShopProvider } from './Context/Context';
import CartPage from './components/Cart';


export default function Home() {
  return (
    <ShopProvider>
      <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} /> 
      </Routes>
      </BrowserRouter>
    </ShopProvider>
  )
}
