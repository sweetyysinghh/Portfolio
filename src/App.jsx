import React from 'react';
import './custom.css'; // Import the custom CSS file
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  return (
    <div className="bg-gradient-custom">
      <Navbar />
      <Main />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
