import { Button, Table } from "reactstrap";
import "./steps.css";
import useLocalStorage from "../../LocalStorage";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const studentsData = JSON.parse(localStorage.getItem("studentData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));
  const [groupData, setGroupData] = useLocalStorage("groupData");
  const [finalData, setFinalData] = useLocalStorage("finalData");
  const [database, setDatabase] = useLocalStorage("database");
  const [groupList, setGroupList] = useState(database ? database : []);

  const statusses = [
    { id: 0, statusName: "❌❌Not Checked❌❌" },
    { id: 1, statusName: "🚫🚫Fail🚫🚫" },
    { id: 2, statusName: "🔧🔧 Need to Fix🔧🔧" },
    { id: 3, statusName: "✔️✔️Need to Improve✔️✔️" },
    { id: 4, statusName: "✅✅Done✅✅" },
  ];

  const clearStorage = () => {
    let removeList = [
      "studentData",
      "groupName",
      "taskData",
      "groupData",
      "studentData",
    ];
    removeList.forEach((k) => localStorage.removeItem(k));
  };

  const updateStatus = (e, studentId, taskId) => {
    const selectedIndex = e.target.options.selectedIndex;
    let new_results = groupData.results.map((result) => {
      if (result.studentId === studentId && result.taskId === taskId) {
        let number = +e.target.options[selectedIndex].getAttribute("data-key");
        result.taskStatus = statusses[number].statusName;
      }
      return result;
    });
    setGroupData({ ...groupData, results: new_results });
    setFinalData(groupData);
  };

  const handleGroup = () => {
    let updatedDB = [...groupList];
    updatedDB = [...updatedDB, { groupData }];
    setDatabase(updatedDB);
    clearStorage();
    console.log(updatedDB);
  };

  return (
    <div className="table-responsive">
      <h3>Group Name : {groupName}</h3>

      <Table className="table table-sm table-dark">
        <thead>
          <tr>
            <th>#</th>
            {studentsData?.map((student) => (
              <th key={student.id}>{student.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {taskData?.map((task) => {
            return (
              <tr key={task.taskId}>
                <th>{task.taskName}</th>
                {studentsData.map((student, index) => {
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
      <Button onClick={() => handleGroup()}>
        <Link to="/">Save Group</Link>
      </Button>
    </div>
  );
}
