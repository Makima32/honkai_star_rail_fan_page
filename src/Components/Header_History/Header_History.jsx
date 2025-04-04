import "./Header_History.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header_history() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="history_navegation_menu">
        <div className="history_hamburger_icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`history_father_navegation_menu ${menuOpen ? "open" : ""}`}>
          <div className="Gachapon_menu">
            <Link to="/updates">Actualizaciones</Link>
          </div>
          <div className="history_gameplay_menu">
            <Link to="/gameplay">Gameplay</Link>
          </div>
          <div className="history_logo">
            <Link to="/">
              <img src="/img/logo_original_honkai.png" alt="Logo" />
            </Link>
          </div>
          <div className="history_character_menu">
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

export default Header_history;
