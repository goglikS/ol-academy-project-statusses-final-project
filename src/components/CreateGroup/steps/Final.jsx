import React from "react";
import { Link } from "react-router-dom";

export default function Final() {
  return (
    <div>
      <h1>Congratulations!</h1>
      <h3>You Added New Group</h3>
      <Link to="/" onClick={() => localStorage.clear()}>
        Home
      </Link>
    </div>
  );
}
