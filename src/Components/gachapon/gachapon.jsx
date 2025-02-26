import { useState } from "react";
import "./Gachapon.css";
import characters from "../../services/characters/characters"; // Asegúrate de que la lista de personajes está bien importada.

function GachaponComponent() {
    const [rolledCharacter, setRolledCharacter] = useState(null);
    const [isRolling, setIsRolling] = useState(false);

    const rollGacha = () => {
        if (isRolling) return; 
        setIsRolling(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * characters.length);
            setRolledCharacter(characters[randomIndex]); 
            setIsRolling(false);
        }, 2000); 
    };

    return (
        <div className="gachapon-container">
            <h1 className="gachapon-title">Invocación Estelar</h1>

            <div className="gachapon-display">
                <img
                    src={rolledCharacter ? rolledCharacter.gif : ""}
                    alt=""
                    className={isRolling ? "rolling" : ""}
                />
            </div>

            <button onClick={rollGacha} className="gachapon-button" disabled={isRolling}>
                {isRolling ? "Invocando..." : "Invocar"}
            </button>

            {rolledCharacter && (
                <div className="character-info">
                    <h2>{rolledCharacter.name}</h2>
                    <p>{rolledCharacter.alias}</p>
                </div>
            )}
        </div>
    );
}

export default GachaponComponent;
