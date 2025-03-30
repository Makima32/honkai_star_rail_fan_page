import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header_home.css";

function Header_home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="navegation_menu">
        <div className="hamburger_icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`father_navegation_menu ${isMenuOpen ? "open" : ""}`}>
          <div className="Gachapon_menu">
            <Link to="/updates">Actualizaciones</Link>
          </div>
          <div className="Gameplay_menu">
            <Link to="/gameplay">Gameplay</Link>
          </div>
          <div className="Logo">
            <Link to="/">
              <img src="/img/logo_original_honkai.png" alt="Logo" />
            </Link>
          </div>
          <div className="Character_menu">
            <Link to="/characters">Personaje</Link>
          </div>
          <div className="history_menu">
            <Link to="/history">Historia</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_home;
