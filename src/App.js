import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleNavbar} />
      <Navbar toggle={toggleNavbar} />
      <Hero />
    </>
  );
}

export default App;
