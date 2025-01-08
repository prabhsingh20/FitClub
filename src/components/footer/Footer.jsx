import "./footer.css";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedin from "/linkedin.png";
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
    </div>
  );
}

export default Footer;
