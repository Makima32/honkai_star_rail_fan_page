import "./Header_standar.css";
import { Link } from "react-router-dom";

function Header_standar() {
  return (
    <header>
      <nav className=""> 
        <div className="header-standar-div-father">
          <div className="header-standar-gachapon"> <Link to="/gachapon">NotFinished</Link> </div> 
          <div className="header-standar-gameplay"> <Link to="/gameplay">Gameplay</Link> </div>
          <div className="header-standar-logo"> <Link to="/"> <img src="public/img/logo_original_honkai.png" alt="Logo" /></Link> </div>
          <div className="header-standar-character"> <Link to="/characters">Personaje</Link> </div>
          <div className="header-standar-history"> <Link to="/history">Historia</Link> </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_standar;
