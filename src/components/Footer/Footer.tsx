import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vova</h1>

        <ul className="footer__list">
          <li>
            <a href="#abot" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/vovaizmailov/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vova-izmailov-a55552230/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100000512587251"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Vova Izmailov 2023</span>
      </div>
    </div>
  );
}

export default Footer;
