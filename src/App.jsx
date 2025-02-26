import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home_Page from "./Pages/Home/Home";
import Gameplay from "./Pages/Gameplay/Gameplay"; 
import GachaponPage from "./Pages/Gachapon/gachapon";
import Characters_page from "./Pages/Characters_page/Characters_page";
import History_page from "./Pages/History_page/History_page";

function App() {
  return (

     
    <Router>
      <Routes>
        <Route path="/*" element={<Home_Page/>} />
        <Route path="/home" element={<Home_Page/>} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/gachapon" element={<GachaponPage/>} />
        <Route path="/characters" element={<Characters_page/>} />
        <Route path="/history" element={<History_page/>} />



      </Routes>
    </Router>
  );
  
}

export default App;
