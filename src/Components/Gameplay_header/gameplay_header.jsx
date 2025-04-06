import "./gameplay_header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Gameplay_Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="navegation_menu_gameplay">
        <div className="hamburger_icon_gameplay" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`father_navegation_menu_gameplay ${menuOpen ? "open" : ""}`}>
          <div className="Gachapon_menu">
            <Link to="/updates" onClick={() => setMenuOpen(false)}>Actualizaciones</Link>
          </div>
          <div className="gameplay_menu">
            <Link to="/gameplay" onClick={() => setMenuOpen(false)}>Gameplay</Link>
          </div>
          <div className="logo_gameplay">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="img/logo_original_honkai.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu3_gameplay">
            <Link to="/characters" onClick={() => setMenuOpen(false)}>Personajes</Link>
          </div>
          <div className="menu4_gameplay">
            <Link to="/history" onClick={() => setMenuOpen(false)}>Historia</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Gameplay_Header;
