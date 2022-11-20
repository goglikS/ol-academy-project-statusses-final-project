import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Table,
} from "reactstrap";

const Project = () => {
  const database = JSON.parse(localStorage.getItem("database"));

  return (
    <div>
      123 {console.log(database)}
      <Table className="table table-sm table-dark">
        <thead>
          <tr>
            <th>#</th>
          </tr>
        </thead>

        {/* <tbody>
          {database.groupData.tasks.map((task) => {
            return (
              <tr key={task.taskId}>
                <th>{task.taskName}</th>
                {database.groupData.students.map((student, index) => {
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
        </tbody> */}
      </Table>
    </div>
  );
};

export default Project;
