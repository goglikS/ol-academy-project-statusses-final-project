
import { useState } from 'react';
import { Table } from 'reactstrap';
import './steps.css'

export default function Details() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const students = JSON.parse(localStorage.getItem("studentData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));
  const [open, setOpen] = useState(false);
  const [taskStatus,settaskStatus] = useState("Not Done")
  const handleMenuOne = () => {
    // do something
    settaskStatus("middle")
  };

  const handleMenuTwo = () => {
    // do something
    settaskStatus("done")
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const status = [];

  for (let i = 0; i < students.length; i++) {
    status.push(
      <td scope="row" id={i}>
        <button onClick={handleOpen}>{taskStatus}</button>
      </td>
    );
  }

  return (
    <div className="table-responsive">
      <h3>{groupName}</h3>
      <Table className="table table-sm table-dark">
        <tbody>
          <tr>
            <th scope="col">#</th>
            {students.map((student) => (
              <th key={student.id}>{student.name}</th>
            ))}
          </tr>

          {taskData.map((task) => (
            <tr>
              <th scope="col" key={task.id}>
                {task.taskName}
              </th>
              {status}
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
      
      {open ? (
        <ul className="menu">
          <li className="menu-item">
          <button onClick={handleMenuOne}>In the Middle</button>
          </li>
          <li className="menu-item">
          <button onClick={handleMenuTwo}>Done</button>
          </li>
        </ul>
      ) : null}
    </div>
    </div>
  );
}
