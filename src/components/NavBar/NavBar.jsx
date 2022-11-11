import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Project Statusses</h3>
      <nav ref={navRef}>
        <div className="link"><Link to="/">Home</Link></div>
        <div className="link"><Link to="/projects">Projects</Link></div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      
    </header>
  );
}

export default NavBar;
