import { Link, Links } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="https://github.com/makima32" target="_blank" rel="noopener noreferrer">
          <img src="/img/github-logo.png" alt="GitHub" className="github-logo" />
        </a>
        <ul className="footer-routes">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/gameplay">Gameplay</Link></li>
          <li><Link to="/updates">Updates</Link></li>
          <li><Link to="/characters">Personajes</Link></li>
          <li><a href="/history">Historia</a></li>
        </ul>
        
        <Link to="/kirby">
  <img src="/img/kirby.png" alt="Decoración" className="footer-decoration" />
</Link>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Honkai Star Rail Fan Page. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><Link to="/terms">Términos y condiciones</Link></li>
          <li><Link to="/privacy">Política de privacidad</Link></li>
        </ul>

        <div className="footer_social_media">
          <a href="https://www.instagram.com/honkaistarrail/?hl=es">
            <img src="/img/social_media_icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/img/social_media_icons/x-social-media-white-icon.svg" alt="Twitter/X" />
          </a>
          <a href="https://www.youtube.com/@HonkaiStarRail/videos">
            <img src="/img/social_media_icons/youtube-svgrepo-com.svg" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
