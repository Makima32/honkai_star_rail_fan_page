import "./gameplay_header.css";
import { Link } from "react-router-dom";

function Gameplay_Header() {
  return (
    <header>
      <nav className="navegation_menu_gameplay"> 
        <div className="father_navegation_menu_gameplay">
          <div className="gachapon_menu_gameplay"> 
            <Link to="/gachapon">Gachapon</Link> 
          </div> 
          <div className="gameplay_menu"> 
            <Link to="/gameplay">Gameplay</Link> 
          </div>
          <div className="logo_gameplay"> 
            <Link to="/"> 
              <img src="public/img/logo_original_honkai.png" alt="Logo" />
            </Link> 
          </div>
          <div className="menu3_gameplay"> 
            <Link to="/menu3">Menú 3</Link> 
          </div>
          <div className="menu4_gameplay"> 
            <Link to="/menu4">Menú 4</Link> 
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Gameplay_Header;
