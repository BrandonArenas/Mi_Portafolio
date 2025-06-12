import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="navbar">
      <nav>
        <a href="#home" className="logo">MiPortafolio</a>
        
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#about" className="nav-link">Sobre Mí</a></li>
          <li><a href="#projects" className="nav-link">Proyectos</a></li>
          <li><a href="#skills" className="nav-link">Habilidades</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
        
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
