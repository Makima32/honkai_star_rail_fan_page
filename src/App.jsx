import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home_Page from "./Pages/Home/Home";
import Gameplay from "./Pages/Gameplay/Gameplay"; 
import GachaponPage from "./Pages/Gachapon/gachapon";
import Characters_page from "./Pages/Characters_page/Characters_page";
import History_page from "./Pages/History_page/History_page";
import VersionDetail from "./Components/VersionDetail/VersionDetail";
import UpdatesDbComponent_Page from "./Pages/UpdatesDbComponent_Page/UpdatesDbComponent_Page";
import Terms_page from "./Pages/Terms_page/Terms_page";
import Privacy_page from "./Pages/Privacy_page/Privacy_page";


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

        <Route path="/updates" element={<UpdatesDbComponent_Page />} />
        <Route path="/version/:versionId" element={<VersionDetail/>} />
        <Route path="/terms" element={<Terms_page />} />
        <Route path="/privacy" element={<Privacy_page />} />




      </Routes>
    </Router>
  );
  
}

export default App;
