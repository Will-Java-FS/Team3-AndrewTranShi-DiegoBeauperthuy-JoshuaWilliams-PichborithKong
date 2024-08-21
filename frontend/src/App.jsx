
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu'
import Order from './components/Order';

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/myOrder" element={<Order />} />
        </Routes>
      </BrowserRouter>
/*
      <Navbar />

      <main>
        <div id = "home">
          <Home />
        </div>
        <div id ="about">
          <About />
        </div>
      </main>

      <Footer />
      */
    </div>
  )
}

export default App
