import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import CreateForm from "../CreateGroup/CreateForm";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
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
          <div className="link">
            <Link to="/" onClick={() => localStorage.clear()}>
              Home
            </Link>
          </div>
          <div className="link">
            <Link to="/projects" onClick={() => localStorage.clear()}>
              Projects
            </Link>
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
