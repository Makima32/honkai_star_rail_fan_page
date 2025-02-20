import Button1 from "../Button1/Button1";
import "./HonkaiTrailer.css"

function Honkai_trailer() {


    return(

        <>
        
        <div className="trailer-section">
    <div className="trailer-text">
        <h2>Descubre la Aventura de Honkai: Star Rail</h2>
        <p>
            Embárcate en un viaje intergaláctico a bordo del Expreso Astral.  
            Enfréntate a desafíos épicos, explora planetas misteriosos y forma tu equipo definitivo.
        </p>
        
        <Button1></Button1>
        
    </div>

    <div className="video-container">
        <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/w8vPZrMFiZ4"
            title="Honkai Star Rail Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</div>


        
        </>


    )
    
}

export default Honkai_trailer;