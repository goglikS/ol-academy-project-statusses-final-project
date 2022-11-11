import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Home</h1>
        <button>
          <Link to="/create">Create Group</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
