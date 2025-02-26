import "./Characters_cards.css";
import characters from "../../services/characters/characters";

function Characters_cards() {
  return (
    <>


      <div className="Character_cards_father_div">
      <div className="Character_cards_title_div">   
             <h1>Personajes en Honkai Star Rail</h1>
      </div>
        {characters.map((character, index) => (
          <div key={index} className="Character_card">
            <div className="Character_card_inner">

              {/* Frontal de la carta */}

              <div className="Character_card_front">
                <img src={character.image_card} alt={character.name} />
              </div>
              
              {/* Trasera de la carta */}

              <div className="Character_card_back">
                <h3>{character.name}</h3>
                <p>Elemento: {character.element}</p>
                <p>Rol: {character.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters_cards;
