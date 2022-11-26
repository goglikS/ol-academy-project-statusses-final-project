import React, { useEffect, useRef } from "react";
import { Table } from "reactstrap";
import "./style.css";
import { statusses } from "../Utils/utils";
import useLocalStorage from "../Utils/useLocalStorage";

const PopUpModal = ({ group, onClose }) => {
  const popupRef = useRef(null);
  const database = JSON.parse(localStorage.getItem("database"));
  const [, setDb] = useLocalStorage("database");

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (popupRef.current !== null) {
        if (!popupRef.current.contains(target)) {
          onClose();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  const getStatus = (taskId, studentId) => {
    let status;
    group.results.map((result) => {
      if (result.taskId === taskId && result.studentId === studentId)
        status = result.taskStatus;
      return status;
    });
  };

  const setStatus = (e, taskId, studentId) => {
    let newDb = [...database];
    const selectedIndex = e.target.options.selectedIndex;
    group.results.map((result) => {
      if (result.studentId === studentId && result.taskId === taskId) {
        let number = +e.target.options[selectedIndex].getAttribute("data-key");
        result.taskStatus = statusses[number].statusName;
      }
      return result;
    });
    const index = newDb.findIndex((groups) => groups.groupId === group.groupId);
    newDb[index] = group;
    setDb(newDb);
  };

  return (
    <>
      <div className="popup-overlay" />
      <div className="popup-wrapper">
        <div className="popup" ref={popupRef}>
          <div className="popup-header">
            <button
              type="button"
              className="popup-close-button"
              data-dismiss="popup"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1 id="popoutId">GroupName : {group.groupName}</h1>
          <Table className="table table-sm table-dark">
            <thead>
              <tr>
                <th>#</th>
                {group.students?.map((student) => (
                  <th key={student.id}>{student.studentName}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {group.tasks?.map((task) => {
                return (
                  <tr key={task.taskId}>
                    <th>{task.taskName}</th>
                    {group.students?.map((student, index) => {
                      return (
                        <td key={index}>
                          <select
                            defaultValue={getStatus(task.id, student.id)}
                            onChange={(e) => setStatus(e, task.id, student.id)}
                          >
                            {statusses.map((status, key) => (
                              <option key={key} data-key={key}>
                                {status.statusName}
                              </option>
                            ))}
                          </select>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
