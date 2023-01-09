import "./Social.css";

function Social(): JSX.Element {
  return (
    <div className="Social">
      <a
        href="https://www.instagram.com/vovaizmailov/"
        className="social-icon"
        target="_blank"
      >
        <i className="bx bxl-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/vova-izmailov-a55552230/"
        className="social-icon"
        target="_blank"
      >
        <i className="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100000512587251"
        className="social-icon"
        target="_blank"
      >
        <i className="bx bxl-facebook"></i>
      </a>
    </div>
  );
}

export default Social;
