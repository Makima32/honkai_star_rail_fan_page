import "./Header_standar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header_standar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="header-standar-nav">
        <div className="hamburger_icon_standar" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`header-standar-div-father ${menuOpen ? "open" : ""}`}>
          <div className="header-standar-gachapon">
            <Link to="/updates" onClick={() => setMenuOpen(false)}>Actualizaciones</Link>
          </div>
          <div className="header-standar-gameplay">
            <Link to="/gameplay" onClick={() => setMenuOpen(false)}>Gameplay</Link>
          </div>
          <div className="header-standar-logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="img/logo_original_honkai.png" alt="Logo" />
            </Link>
          </div>
          <div className="header-standar-character">
            <Link to="/characters" onClick={() => setMenuOpen(false)}>Personaje</Link>
          </div>
          <div className="header-standar-history">
            <Link to="/history" onClick={() => setMenuOpen(false)}>Historia</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_standar;
