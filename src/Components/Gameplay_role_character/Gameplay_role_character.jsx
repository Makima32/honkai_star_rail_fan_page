import "./Gameplay_role_character.css";

function Gameplay_role_character() {
  return (
    <>
      <div className="gameplay_role_character_div_father">
        <div className="gameplay_role_character_div_img">
          <img
            src="\img\gameplay_vias_image.png"
            alt="Gameplay Role"
          />
        </div>

        <div className="gameplay_role_character_div_information">
          <div className="gameplay_role_character_div_information_title">
            <h1>Roles y Estrategia en el Combate</h1>
          </div>

          <div className="gameplay_role_character_div_information_text">
            <p>
              En Honkai: Star Rail, cada personaje pertenece a un rol específico
              dentro del combate, como DPS, soporte o tanque. La sinergia entre
              estos roles es crucial para maximizar la efectividad del equipo y
              superar los desafíos más difíciles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gameplay_role_character;
