import "./DefaultHeader.css";
import { Link } from "react-router-dom";

function Default_Header() {
  return (
    <header>
      <nav className="Default_navegation_menu"> 
        <div className="Default_father_navegation_menu">
          <div className="Default_Gachapon_menu"> <Link to="/">Menu1</Link> </div> 
          <div className="Default_Menu2"><Link to="/menu2">Menu2</Link> </div>
          <div className="Default_Logo"> <Link to="/"> <img src="public/img/Logo.png" alt="Logo" /></Link> </div>
          <div className="Default_Menu3"><Link to="/menu3">Menu3</Link> </div>
          <div className="Default_Menu4"><Link to="/menu4">Menu4</Link> </div>
        </div>
      </nav>
    </header>
  );
}

export default Default_Header;
