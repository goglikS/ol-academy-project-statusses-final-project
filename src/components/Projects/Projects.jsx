import React from "react";
import { Button } from "reactstrap";
import PopUp from "../Popup/PopUp";
import useLocalStorage from "../Utils/useLocalStorage";
import "./Projects.css";

const Projects = () => {
  const [database, setDatabase] = useLocalStorage("database");

  const removeGroup = (delId) => {
    setDatabase(database.filter(({ groupId }) => groupId !== delId));
  };

  return (
    <div className="row row-cols-4 gx-0">
      {database?.map((group) => {
        return (
          <div className="card col card-wrapper" key={group.groupId}>
            <Button color="danger" onClick={() => removeGroup(group.groupId)}>
              remove Group
            </Button>
            <div className="card-body ">
              <h3 className="card-title">GroupName : {group.groupName}</h3>

              <h4 className="card-title">
                Students QNTY :
                {!group.students?.length ? 0 : group.students.length}
              </h4>
              <h4 className="card-title">
                Tasks QNTY : {!group.tasks?.length ? 0 : group.tasks.length}
              </h4>
              <PopUp group={group} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
