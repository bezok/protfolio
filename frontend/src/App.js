import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Categories />
        <About />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;