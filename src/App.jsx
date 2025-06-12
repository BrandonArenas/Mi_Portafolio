import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer>
        <p>&copy; 2025 BrandonAB. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default App;
