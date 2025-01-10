import { useState, useEffect } from "react";
import "./header.css";
import bars from "/menu_24dp_F48915_FILL0_wght400_GRAD0_opsz24.svg";
import logo from "/logo.png";
import { Link } from "react-scroll";

function Header() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setMobile(isMobile);

      if (!isMobile) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <img src={logo} className="logo" alt="website logo fit club" />
      {menuOpened === false && mobile === true ? (
        <div className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
          <img src={bars} className="bars" alt="hamburger icon" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="hero"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              spy={true}
              onClick={() => setMenuOpened(false)}
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
