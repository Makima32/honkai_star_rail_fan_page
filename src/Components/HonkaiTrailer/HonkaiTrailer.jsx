import Button1 from "../Button1/Button1";
import "./HonkaiTrailer.css"

function Honkai_trailer() {


    return(

        <>
        
        <div className="trailer-section">
    <div className="trailer-text">
        <h2>Descubre la Aventura de Honkai: Star Rail</h2>
        <p id="trailer_text_p">
            Embárcate en un viaje intergaláctico a bordo del Expreso Astral.  
            Enfréntate a desafíos épicos, explora planetas misteriosos y forma tu equipo definitivo.
        </p>
        
        <div className="div_button">

        
        <Button1 id="button_dowload"></Button1>
        </div>
    </div>

    <div className="video-container">
        <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/w8vPZrMFiZ4"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
        ></iframe>
    </div>
</div>


        
        </>


    )
    
}

export default Honkai_trailer;