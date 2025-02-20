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
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
