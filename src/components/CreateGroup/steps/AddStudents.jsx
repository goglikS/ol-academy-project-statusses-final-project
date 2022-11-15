import { useState } from "react";
import useLocalStorage from "../LocalStorage";

export default function AddStudents() {
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useLocalStorage("studentData");
  const [studentList, setStudentList] = useState(
    studentData ? studentData : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(inputValue);
    setInputValue("");
  };
  const addStudent = (userInput) => {
    if (userInput !== "") {
      let updatedStudents = [...studentList];
      updatedStudents = [
        ...updatedStudents,
        { id: Date.now(), name: userInput },
      ];
      setStudentData(updatedStudents);
      setStudentList(updatedStudents);
    } else alert("Wrong Value");
  };

  const removeStudent = (delId) => {
    let updatedStudents = [...studentList];
    setStudentData(updatedStudents.filter(({ id }) => id !== delId));
    setStudentList(updatedStudents.filter(({ id }) => id !== delId));
  };

  return (
    <div>
      <div>
        <div>Group Name </div>
        <div>
          <input
            type="text"
            placeholder="Enter Student"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button type="button" onClick={handleSubmit}>
            Add Student
          </button>
          <div>
            <ul>
              {studentList.map((student) => (
                <li key={student.id}>
                  {student.name}
                  <button onClick={() => removeStudent(student.id)}>Del</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
