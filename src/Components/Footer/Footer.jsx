import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Honkai Star Rail Fan Page. Todos los derechos reservados.</p>
                <nav>
                    <ul className="footer-links">
                        <li><a href="#">Términos y condiciones</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Contacto</a></li>
                         <li><img src="" alt="" /></li>
                    </ul>

                </nav>

              
              <div className="footer_social_media">
                <a href="https://www.instagram.com/honkaistarrail/?hl=es"><img src="public\img\social_media_icons\instagram.svg" alt="Instagram" /></a>
                <a href=""><img src="public\img\social_media_icons\icons8-x-logo.svg" alt="Twiter/X" /></a>
                <a href="https://www.youtube.com/@HonkaiStarRail/videos"><img src="public\img\social_media_icons\youtube-svgrepo-com.svg" alt="Youtube" /></a>


              </div>
            </div>
        </footer>
    );
}

export default Footer;
