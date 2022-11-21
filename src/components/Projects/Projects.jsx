import React from "react";
import useLocalStorage from "../LocalStorage";

const Projects = () => {
  const [database, setDatabase] = useLocalStorage("database");

  return (
    <div className="projects">
      <h1>Projects</h1>
      {console.log(database)}
    </div>
  );
};

export default Projects;
