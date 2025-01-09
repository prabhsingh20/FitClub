import "./footer.css";
import github from "/footer/github.png";
import instagram from "/footer/instagram.png";
import linkedin from "/footer/linkedin.png";
import logo from "/logo.png";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={github} alt="github logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={linkedin} alt="linkedin logo" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="company logo" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
}

export default Footer;
