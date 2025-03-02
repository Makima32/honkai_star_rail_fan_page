import "./Header_character.css";
import { Link } from "react-router-dom";

function Header_character() {
  return (
    <header>
      <nav className="navegation_menu_character"> 
        <div className="father_navegation_menu_character">
          <div className="Gachapon_menu_character"> 
            <Link to="/gachapon">NotFinished</Link> 
          </div> 
          <div className="Gameplay_menu_character"> 
            <Link to="/gameplay">Gameplay</Link> 
          </div>
          <div className="Logo_character"> 
            <Link to="/"> 
              <img src="public/img/logo_original_honkai.png" alt="Logo" />
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
