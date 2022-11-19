import { Button } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Home</h1>

        <Link to="/create" className="primary">
          Create Group
        </Link>
      </div>
    </div>
  );
};

export default Home;
