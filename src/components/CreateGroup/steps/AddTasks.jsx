import { useState } from "react";
import useLocalStorage from "../LocalStorage";
import './steps.css'

export default function AddTasks() {
  const [inputValue, setInputValue] = useState("");
  const [taskData, setTaskData] = useLocalStorage("taskData");
  const [taskList, setTaskList] = useState(taskData ? taskData : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };
  const addTask = (userInput) => {
    if (userInput !== "") {
      let updatedTasks = [...taskList];
      updatedTasks = [...updatedTasks, { id: Date.now(), taskName: userInput }];
      setTaskData(updatedTasks);
      setTaskList(updatedTasks);
    } else alert("Wrong Value");
  };

  const removeTask = (delId) => {
    let updatedTasks = [...taskData];
    setTaskData(updatedTasks.filter(({ id }) => id !== delId));
    setTaskList(updatedTasks.filter(({ id }) => id !== delId));
  };

  return (
    <div>
      <div className="wrapper center">
        <div>Tasks </div>
        <div>
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
                  <button onClick={() => removeTask(task.id)}>Del</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
