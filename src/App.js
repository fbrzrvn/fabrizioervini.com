import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from './components/Info/data';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

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
      <Info {...homeObjOne} />
      <Portfolio />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
}

export default App;
