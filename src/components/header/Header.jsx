import { useState } from "react";
import "./header.css";
import bars from "/menu_24dp_F48915_FILL0_wght400_GRAD0_opsz24.svg";
import logo from "/logo.png";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={logo} className="logo" alt="websie logo fit club" />
      {menuOpened === false && mobile === true ? (
        <div className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
          <img src={bars} className="bars" alt="hamburger image" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="hero"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
