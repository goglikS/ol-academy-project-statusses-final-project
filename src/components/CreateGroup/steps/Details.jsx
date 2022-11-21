import { Button, Table } from "reactstrap";
import "./steps.css";
import useLocalStorage from "../../LocalStorage";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const studentsData = JSON.parse(localStorage.getItem("studentData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));
  const resultsData = JSON.parse(localStorage.getItem("resultsData"));
  const [database, setDatabase] = useLocalStorage("database");

  const [groupResults, setGroupResults] = useState(resultsData);

  const statusses = [
    { id: 0, statusName: "❌❌Not Checked❌❌" },
    { id: 1, statusName: "🚫🚫Fail🚫🚫" },
    { id: 2, statusName: "🔧🔧 Need to Fix🔧🔧" },
    { id: 3, statusName: "✔️✔️Need to Improve✔️✔️" },
    { id: 4, statusName: "✅✅Done✅✅" },
  ];

  const setData = () => {
    let newGroup = {
      groupId: Date.now(),
      groupName: groupName,
      students: studentsData,
      tasks: taskData,
      results: groupResults,
    };
    if (!database) {
      let currentGroups = [];
      currentGroups.push(newGroup);
      setDatabase(currentGroups);
      console.log("carieli", currentGroups);
    } else {
      let currentGroups = [...database];
      currentGroups.push(newGroup);
      console.log("aracarieli", currentGroups);
    }
    let removeList = ["groupName", "studentData", "taskData", "resultsData"];
    removeList.forEach((k) => localStorage.removeItem(k));
  };

  const updateStatus = (e, studentId, taskId) => {
    const selectedIndex = e.target.options.selectedIndex;
    let new_results = resultsData.map((result) => {
      if (result.studentId === studentId && result.taskId === taskId) {
        let number = +e.target.options[selectedIndex].getAttribute("data-key");
        result.taskStatus = statusses[number].statusName;
      }
      return result;
    });
    setGroupResults(new_results);
  };

  return (
    <div className="table-responsive">
      <h3>Group Name : {groupName}</h3>

      <Table className="table table-sm table-dark">
        <thead>
          <tr>
            <th>#</th>
            {studentsData?.map((student) => (
              <th key={student.id}>{student.studentName}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {taskData?.map((task) => {
            return (
              <tr key={task.taskId}>
                <th>{task.taskName}</th>
                {studentsData?.map((student, index) => {
                  return (
                    <td key={index}>
                      <select
                        onChange={(e) => updateStatus(e, student.id, task.id)}
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
      <button
        type="button"
        class="btn btn-success finish-btn"
        onClick={() => setData()}
      >
        <Link to="/">Finish</Link>
      </button>
    </div>
  );
}
