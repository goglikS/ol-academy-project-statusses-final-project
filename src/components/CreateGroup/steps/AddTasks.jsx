import { useState } from "react";
import useLocalStorage from "../../LocalStorage";
import "./steps.css";

export default function AddTasks() {
  const [taskData, setTaskData] = useLocalStorage("taskData");
  const studentsData = JSON.parse(localStorage.getItem("studentData"));
  const [resultsData, setResultsData] = useLocalStorage("resultsData");

  const [inputValue, setInputValue] = useState("");

  const [taskList, setTaskList] = useState(taskData ? taskData : []);

  const groupResult = useState(resultsData ? resultsData : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  const addTask = (userInput) => {
    if (userInput !== "") {
      let tasks = [...taskList];
      tasks = [...tasks, { id: Date.now(), taskName: userInput }];

      let results = [];
      studentsData.forEach((student) => {
        tasks.forEach((task) => {
          results.push({
            statusId: student.id + "." + task.id,
            taskStatus: "❌❌Not Checked❌❌",
            studentId: student.id,
            taskId: task.id,
          });
        });
      });
      setTaskList(tasks);
      setTaskData(tasks);
      setResultsData(results);
    } else alert("Wrong Value");
  };

  const handleDelete = (delId) => {
    let updatedTasks = [...taskList];
    let updatedResults = [...groupResult];

    setTaskData(updatedTasks.filter(({ id }) => id !== delId));
    setTaskList(updatedTasks.filter(({ id }) => id !== delId));
    setResultsData(updatedResults.filter(({ taskId }) => taskId !== delId));
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
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
