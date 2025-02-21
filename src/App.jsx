import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home_Page from "./Pages/Home/Home";
import Gameplay from "./Pages/Gameplay/Gameplay"; 

function App() {
  return (

     
    <Router>
      <Routes>
        <Route path="/*" element={<Home_Page/>} />
        <Route path="/home" element={<Home_Page/>} />
        <Route path="/gameplay" element={<Gameplay />} />

      </Routes>
    </Router>
  );
  
}

export default App;
