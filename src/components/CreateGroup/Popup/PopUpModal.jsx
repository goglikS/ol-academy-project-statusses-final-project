import React, { useEffect, useRef } from "react";
const PopUpModal = ({ onClose }) => {
  const popupRef = useRef(null);
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const students = JSON.parse(localStorage.getItem("studentData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));

  const seeData = () => {
    console.log("group name : ", groupName);
    console.log("students : ", students);
    console.log("tasks : ", taskData);
  };

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
  });

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
          <div> Group Name : {groupName}</div>
      <div>
        Students :
        <ul>
          {students?.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
      <div>
        Tasks :
        <ul>
          {taskData?.map((task) => (
            <li key={task.id}>{task.taskName}</li>
          ))}
        </ul>
      </div>
   

      <button onClick={seeData}>Save Data</button>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;