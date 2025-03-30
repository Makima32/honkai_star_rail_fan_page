import { useState } from "react"; 
import "./CharacterList.css";
import characters from "../../services/characters/characters";

function CharacterList() {
    
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

    return (

        
        <div className="div_father_character_list">
            <div className="characters_Wheel">
                <img 
                    src="/img/archeron_icon3.png" 
                    alt="Castorice" 
                    className="character_button"
                    onClick={() => setSelectedCharacter(characters[0])} 
                />
                <img 
                    src="/img/agalea_icon3.png" 
                    alt="Agalea" 
                    className="character_button"
                    onClick={() => setSelectedCharacter(characters[1])} 
                />
                <img 
                    src="/img/kafka_icon.png" 
                    alt="Sunday" 
                    className="character_button"
                    onClick={() => setSelectedCharacter(characters[2])} 
                />
            </div>

            <div className="Character_info">
                <div className="Character_card_character_list">
                    
                    <div className="Character_info_div">
                        <h1>{selectedCharacter.name}</h1> 
                        <h2>{selectedCharacter.alias}</h2>
                        <p>{selectedCharacter.lore}</p> 
                    </div>

                    <div className="container_img_character_list">
                        <img src={selectedCharacter.image_character} alt={selectedCharacter.name} /> 
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CharacterList;
