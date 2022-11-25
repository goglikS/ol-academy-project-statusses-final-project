import { Table } from "reactstrap";
import "./steps.css";
import { useState } from "react";
import useLocalStorage from "../../useLocalStorage";
import { statusses } from "../../Utils/utils";

export default function Details() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const studentsData = JSON.parse(localStorage.getItem("studentsData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));
  const defaultResults = JSON.parse(localStorage.getItem("resultsData"));

  const [, setNewResultsData] = useLocalStorage("results");
  const [newResults, setNewResults] = useState(defaultResults);

  const updateStatus = (e, studentId, taskId) => {
    const selectedIndex = e.target.options.selectedIndex;
    let new_results = newResults.map((result) => {
      if (result.studentId === studentId && result.taskId === taskId) {
        let number = +e.target.options[selectedIndex].getAttribute("data-key");
        result.taskStatus = statusses[number].statusName;
      }
      return result;
    });
    setNewResults(new_results);
    setNewResultsData(new_results);
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
                      <div className="custom-select">
                        <select
                          onChange={(e) => updateStatus(e, student.id, task.id)}
                        >
                          {statusses.map((status, key) => (
                            <option key={key} data-key={key}>
                              {status.statusName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <button
        type="button"
        className="btn btn-success finish-btn"
        onClick={setData}
      >
        {/* <Link to="/">Finish</Link> */}
    </div>
  );
}
