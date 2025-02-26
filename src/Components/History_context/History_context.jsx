import History_eones from "../History_eones/History_eones";
import Stelle_presentation from "../Stelle_presentation/Stelle_presentation";
import "./History_context.css"

function History_context() {
    
    return(
<>

<div className="History_context_father_div">

<div className="History_context_tittle_div">

<h1>El Inicio del Viaje</h1>

</div>

<div className="History_context_father_img_text_div">
    
<div className="History_context_text_div">

    <p>En un universo gobernado por los Eones, entidades cósmicas que dictan el destino, Stelle despierta sin recuerdos en la Estación Espacial Herta, portando un Stellaron en su interior, una semilla de caos con el poder de alterar la realidad. Rescatada por la tripulación del Astral Express, inicia un viaje a través de mundos desconocidos, enfrentando civilizaciones en guerra, voluntades divinas y la inminente amenaza de Nanook, el Destructor, cuyo propósito es erradicar toda existencia.</p>

</div>

<div className="History_context_text_img_div">

<img src="public\img\history_context_img.png" alt="" />

</div>
</div>

<Stelle_presentation/>

<History_eones></History_eones>
</div>


</>
)
}

export default History_context;