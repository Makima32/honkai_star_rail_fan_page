import "./Header_History.css";
import { Link } from "react-router-dom";

function Header_history() {
  return (
    <header>
      <nav className="history_navegation_menu"> 
        <div className="history_father_navegation_menu">
          <div className="history_gachapon_menu"> <Link to="/gachapon">Gachapon</Link> </div> 
          <div className="history_gameplay_menu"> <Link to="/gameplay">Gameplay</Link> </div>
          <div className="history_logo"> <Link to="/"> <img src="public/img/logo_original_honkai.png" alt="Logo" /></Link> </div>
          <div className="history_character_menu"> <Link to="/characters">Personaje</Link> </div>
          <div className="history_menu"> <Link to="/history">Historia</Link> </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_history;
