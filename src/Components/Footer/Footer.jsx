import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Honkai Star Rail Fan Page. Todos los derechos reservados.</p>
                <nav>
                    <ul className="footer-links">
                    <li><Link to="/terms">Términos y condiciones</Link></li>
                    <li><Link to="/privacy">Politicas de privacidad</Link></li>
                        <li><a href="#">Contacto</a></li>
                         <li><img src="" alt="" /></li>
                    </ul>

                </nav>

              
              <div className="footer_social_media">
                <a href="https://www.instagram.com/honkaistarrail/?hl=es"><img src="\img\social_media_icons\instagram.svg" alt="Instagram" /></a>
                <a href=""><img src="/img/social_media_icons/x-social-media-white-icon.svg" alt="Twiter/X" /></a>
                <a href="https://www.youtube.com/@HonkaiStarRail/videos"><img src="\img\social_media_icons\youtube-svgrepo-com.svg" alt="Youtube" /></a>
                <a href="\Rss\newcharacters.xml" target="_blank">
                <img src="\img\rss.png" alt="Updates" />
                </a>

              </div>
            </div>
        </footer>
    );
}

export default Footer;
