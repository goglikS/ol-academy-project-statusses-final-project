import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { clearStorage, navLinks } from "../Utils/utils";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>Project Statusses</h3>
        <nav ref={navRef}>
          {navLinks.map(({ text, path }) => (
            <div className="link" key={text}>
              <Link to={path} onClick={clearStorage}>
                {text}
              </Link>
            </div>
          ))}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default NavBar;
