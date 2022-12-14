import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div>
        <h1>Let's Add Group</h1>

        <Link to="/create" className="homeBtn">
          Create Group
        </Link>
      </div>
    </div>
  );
};

export default Home;
