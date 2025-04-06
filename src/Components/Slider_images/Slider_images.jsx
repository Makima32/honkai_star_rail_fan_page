import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider_images.css"
import "./SliderTibur.css"

function Slider_images({ img1, img2, img3, img4 }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
       // <div className="Slider_div_father">


    //   <div className="Slider_div_text">

    //     <h2>Descubre los Mundos de Honkai Star Rail</h2>

    //     <p>A bordo del Expreso Astral, viajarás a través de diferentes mundos, cada uno con su propia historia, habitantes y desafíos únicos. Desde ciudades futuristas hasta ruinas ancestrales, cada destino esconde secretos y aventuras por descubrir. Prepárate para explorar, luchar y desentrañar los misterios del universo.</p>
    //   </div>

    //   <div className="Slider_div_carrusel">
    
        <Slider {...settings}>

          <div><img src={img1} alt="Slide 1" /></div>
          <div><img src={img2} alt="Slide 2" /></div>
          <div><img src={img3} alt="Slide 3" /></div>
          <div><img src={img4} alt="Slide 4" /></div>

        </Slider>

       </div>
    </div> 
    </>
  );
}

export default Slider_images;
