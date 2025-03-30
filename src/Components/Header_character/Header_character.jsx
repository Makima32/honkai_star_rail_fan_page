import "./Header_character.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header_character() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="navegation_menu_character">
        <div className="hamburger_icon_character" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`father_navegation_menu_character ${menuOpen ? "open" : ""}`}>
          <div className="Gachapon_menu_character">
            <Link to="/updates">Actualizaciones</Link>
          </div>
          <div className="Gameplay_menu_character">
            <Link to="/gameplay">Gameplay</Link>
          </div>
          <div className="Logo_character">
            <Link to="/">
              <img src="/img/logo_original_honkai.png" alt="Logo" />
            </Link>
          </div>
          <div className="Character_menu_character">
            <Link to="/characters">Personajes</Link>
          </div>
          <div className="Menu4_character">
            <Link to="/history">Historia</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_character;
