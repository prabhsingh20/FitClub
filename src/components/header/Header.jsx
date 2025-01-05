import "./header.css";
import logo from "/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="websie logo fit club" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
