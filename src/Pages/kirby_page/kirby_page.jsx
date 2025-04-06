import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./kirby_page.css";

function KirbyPage() {
  const audioRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/img/kirby_falling_static.png");
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setImgSrc("https://media1.tenor.com/m/2JkeSn_SOSwAAAAd/kirby-falling.gif");

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setTimeout(() => {
      navigate(-1); 
    }, 2000);
  };

  return (
    <div className="kirby_page_div_father">
        <h2 id="h2-desktop">No pases el raton por encima</h2>
        <h2 id="h2-mobile">No pulses encima de la imagen</h2>
      <div className="kirby_page_div_img">  
        <img
          src={imgSrc}
          alt="Kirby"
          onMouseEnter={handleMouseEnter}
        />
        <audio ref={audioRef} src="/img/kirby_audio.mp3" />
      </div>
    </div>
  );
}

export default KirbyPage;
