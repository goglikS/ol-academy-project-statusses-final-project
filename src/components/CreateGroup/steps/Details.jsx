export default function Details() {
  const groupName = JSON.parse(localStorage.getItem("groupName"));
  const students = JSON.parse(localStorage.getItem("studentData"));
  const taskData = JSON.parse(localStorage.getItem("taskData"));

  const seeData = () => {
    console.log("group name : ", groupName);
    console.log("students : ", students);
    console.log("tasks : ", taskData);
  };

  return (
    <div>
      <div> Group Name : {groupName}</div>
      <div>
        Students :
        <ul>
          {students.map((student) => (
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

      <button onClick={seeData}>See Data</button>
    </div>
  );
}
