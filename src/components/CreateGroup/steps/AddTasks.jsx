import { useState } from "react";
import useLocalStorage from "../../LocalStorage";
import "./steps.css";

export default function AddTasks() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));

  const [taskData, setTaskData] = useLocalStorage("taskData");
  const [taskList, setTaskList] = useState(taskData ? taskData : []);

  const [groupData, setGroupData] = useLocalStorage("groupData");

  const [data, setData] = useLocalStorage("studentData");

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };
  const addTask = (userInput) => {
    if (userInput !== "") {
      let tasks = [...taskList];
      let students = [...data];
      tasks = [...tasks, { id: Date.now(), taskName: userInput }];
      let results = [];
      students.forEach((student) => {
        let data = { studentId: student.id, taskStatus: "❌❌Not Checked❌❌" };
        tasks.forEach((task) => {
          results.push({
            statusId: student.id + "." + task.id,
            ...data,
            taskId: task.id,
          });
        });
      });
      let updResults = {
        groupName: groupName,
        students: students,
        tasks: tasks,
        results: results,
      };
      setTaskList(tasks);
      setTaskData(tasks);
      setGroupData(updResults);
    } else alert("Wrong Value");
  };
  const handleDelete = (delId) => {
    let updatedTasks = [...taskList];
    setTaskData(updatedTasks.filter(({ id }) => id !== delId));
    setTaskList(updatedTasks.filter(({ id }) => id !== delId));
  };

  return (
    <div>
      <div>
        <div>Tasks </div>
        <div className="input">
          <input
            type="text"
            className="input"
            placeholder="Enter Student"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleSubmit}
          >
            Add Task
          </button>

          <div>
            <ul>
              {taskList.map((task) => (
                <li key={task.id}>
                  {task.taskName}
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
