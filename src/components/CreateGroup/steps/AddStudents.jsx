import { useState } from "react";
import useLocalStorage from "../../useLocalStorage";

export default function AddStudents() {
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useLocalStorage("studentsData");
  const [studentList, setStudentList] = useState(studentData || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(inputValue);
    setInputValue("");
  };
  const addStudent = (userInput) => {
    if (userInput !== "") {
      let updatedStudents = [
        ...studentList,
        { id: Date.now(), studentName: userInput },
      ];

      setStudentData(updatedStudents);
      setStudentList(updatedStudents);
    } else alert("Wrong Value");
  };

  const removeStudent = (delId) => {
    setStudentData(studentData.filter(({ id }) => id !== delId));
    setStudentList(studentList.filter(({ id }) => id !== delId));
  };

  return (
    <div>
      <div>
        <div>Add Students</div>
        <div>
          <input
            type="text"
            placeholder="Enter Student"
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSubmit}
          >
            Add Student
          </button>
          <div>
            <ul>
              {studentList?.map((student) => (
                <li key={student.id}>
                  {student.studentName}
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => removeStudent(student.id)}
                  >
                    Del
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
