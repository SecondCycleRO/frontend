import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import { UserPage } from './pages/UserPage/UserPage';
import ProductPage from './pages/ProductPage/ProductPage';
import UserSettings from './pages/UserPage/pages/AccountSettings';
import UserPurchases from './pages/UserPage/pages/MyPurchases';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/purchases" element={<UserPurchases />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
