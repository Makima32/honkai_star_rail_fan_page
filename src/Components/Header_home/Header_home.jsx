import "./Header_home.css";
import { Link } from "react-router-dom";

function Header_home() {
  return (
    <header>
      <nav className="navegation_menu"> 
        <div className="father_navegation_menu">
          <div className="Gachapon_menu"> <Link to="/updates">Actualizaciones</Link> </div> 
          <div className="Gameplay_menu"> <Link to="/gameplay">Gameplay</Link> </div>
          <div className="Logo"> <Link to="/"> <img src="public/img/logo_original_honkai.png" alt="Logo" /></Link> </div>
          <div className="Character_menu"> <Link to="/characters">Personaje</Link> </div>
          <div className="history_menu"> <Link to="/history">Historia</Link> </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_home;
