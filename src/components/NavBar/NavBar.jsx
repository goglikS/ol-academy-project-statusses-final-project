import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ clearStorage }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>Project Statusses</h3>
        <nav ref={navRef}>
          <div className="link">
            <Link to="/" onClick={() => clearStorage()}>
              Home
            </Link>
          </div>
          <div className="link">
            <Link to="/projects">Projects</Link>
          </div>
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
