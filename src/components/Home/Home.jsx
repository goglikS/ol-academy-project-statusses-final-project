import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Let's Add Group</h1>
      <Link to="/create" className="homeBtn">
        Create Group
      </Link>
    </div>
  );
};

export default Home;
