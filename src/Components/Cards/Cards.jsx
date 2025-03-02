import "./Cards.css"

function Cards() {
  return (
    <div className="container-cards">
      <div className="card">
        <img src="public\img\honkai_train.jpg" alt="Expreso Astral" />
        <div className="card-title">Un Viaje Interestelar</div>
        <div className="card-text">El Expreso Astral es el transporte de los Trailblazers. A bordo, explorarás mundos desconocidos, harás aliados y enfrentarás peligros en un viaje lleno de aventuras y misterios.</div>
      </div>

      <div className="card">
        <img src="public\img\elementos.png" alt="Elementos y Caminos" />
        <div className="card-title">Elementos y Caminos</div>
        <div className="card-text">Cada personaje sigue un camino y domina un elemento único, como Fuego, Hielo, cuantico. Aprende a combinarlos estratégicamente para superar los desafíos del universo.</div>
      </div>

      <div className="card">
        <img src="public\img\honkai-gameplay.png" alt="Combate Estratégico" />
        <div className="card-title">Combate Estratégico</div>
        <div className="card-text"> Honkai Star Rail ofrece un combate por turnos dinámico, estratégico y con un estilo anime. Forma tu equipo ideal, encadena habilidades y ejecuta ataques definitivos espectaculares para derrotar a enemigos poderosos. </div>
      </div>
    </div>
  );
}

export default Cards;
