import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navegation_menu"> 
        <div className="father_navegation_menu">
          <div className="Gachapon_menu"> <Link to="/">Menu1</Link> </div> 
          <div className="Gameplay_menu"> <Link to="/gameplay">Gameplay</Link> </div>
          <div className="Logo"> <Link to="/"> <img src="public/img/logo_original_honkai.png" alt="Logo" /></Link> </div>
          <div className="Menu3"> <Link to="/menu3">Menu3</Link> </div>
          <div className="Menu4"> <Link to="/menu4">Menu4</Link> </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
