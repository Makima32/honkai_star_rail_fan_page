import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider_images() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="Slider_div_father"> 

    <Slider {...settings}>

      <div><img src="public\img\aglaea_Splash_art.png" alt="Slide 1" /></div>
      <div><img src="public\img\archeron_Splash_art2.png" alt="Slide 2" /></div>
      <div><img src="public\img\galaxy-honkai-star-rail.png" alt="Slide 3" /></div>

    </Slider>

    </div>

  );
}

export default Slider_images;
