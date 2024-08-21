import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App