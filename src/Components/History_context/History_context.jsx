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

    <p>Stelle despierta sin recuerdos en la Estación Espacial Herta, con un Stellaron en su interior, un poder capaz de alterar la realidad. Rescatada por la tripulación del Astral Express, viaja entre mundos enfrentando civilizaciones en guerra, voluntades divinas y la amenaza de Nanook, el Destructor, cuyo propósito es erradicar toda existencia.</p>

</div>

<div className="History_context_text_img_div">

<img src="\img\history_context_img.png" alt="" />



</div>
</div>
<Stelle_presentation/>



<History_eones></History_eones>
</div>


</>
)
}

export default History_context;