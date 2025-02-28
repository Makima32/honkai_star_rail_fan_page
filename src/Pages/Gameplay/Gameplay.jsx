import Footer from "../../Components/Footer/Footer"
import Gameplay_combat_style from "../../Components/Gameplay_combat_style/Gameplay_combat_style"
import Gameplay_header from "../../Components/Gameplay_header/gameplay_header"
import Gameplay_lighcone_artefac from "../../Components/Gameplay_lighcone_artefac/Gameplay_lighcone_artefac"
import Gameplay_role_character from "../../Components/Gameplay_role_character/Gameplay_role_character"

import "./Gameplay.css"

function Gameplay_Page() {

  return [


    <>

      <Gameplay_header />
      <br />
      <Gameplay_combat_style />

      <br />
      <Gameplay_role_character />
      <br />
      <Gameplay_lighcone_artefac/>

      <Footer/>
      </>

      
  ]

}

export default Gameplay_Page