import React from "react";
import useLocalStorage from "../LocalStorage";
import PopUp from "../Popup/PopUp";

const Projects = () => {
  const [database, setDatabase] = useLocalStorage("database");

  return (
    <>
      <h1>Projects</h1>
      <ul className="row row-cols-4">
        {database?.map((group) => {
          return (
            <div className="card col" style={{ height: 400, width: 400 }}>
              <div className="card-body">
                <h3 className="card-title">GroupName : {group.groupName}</h3>{" "}
                <h4 className="card-title">
                  Students QNTY : {group.students.length}
                </h4>
                <h4 className="card-title">
                  Tasks QNTY : {group.tasks.length}
                </h4>
              </div>
              <PopUp group={group} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
