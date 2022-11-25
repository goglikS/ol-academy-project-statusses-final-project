import { Button } from "reactstrap";
import "./steps/steps.css";
import { Link } from "react-router-dom";
import { clearStorage } from "../Utils/utils";
import useLocalStorage from "../Utils/useLocalStorage";

export default function FormControl({ handleClick, currentStep }) {
  const [database, setDatabase] = useLocalStorage("database");

  const validateStep = () => {
    if (currentStep === 1) {
      const groupName = JSON.parse(localStorage.getItem("groupName"));
      if (!groupName || groupName.length === 0) {
        alert("Please enter Group Name");
      } else handleClick("next");
    }
    if (currentStep === 2) {
      const studentsData = JSON.parse(localStorage.getItem("studentsData"));
      if (!studentsData || studentsData.length === 0) {
        alert("Please add Student(s)");
      } else handleClick("next");
    }
    if (currentStep === 3) {
      const taskData = JSON.parse(localStorage.getItem("taskData"));
      if (!taskData || taskData.length === 0) {
        alert("Please add Task(s)");
      } else handleClick("next");
    }
    if (currentStep === 4) {
      const groupName = JSON.parse(localStorage.getItem("groupName"));
      const studentsData = JSON.parse(localStorage.getItem("studentsData"));
      const taskData = JSON.parse(localStorage.getItem("taskData"));
      const defaultResults = JSON.parse(localStorage.getItem("resultsData"));
      const resultData = JSON.parse(localStorage.getItem("results"));
      let newGroup = {
        groupId: Date.now(),
        groupName: groupName,
        students: studentsData,
        tasks: taskData,
        results: resultData || defaultResults,
      };
      if (!database) {
        let newDb = [];
        newDb.push(newGroup);
        setDatabase(newDb);
        clearStorage();
      } else {
        let newDb = [...database];
        newDb.push(newGroup);
        setDatabase(newDb);
        clearStorage();
      }
    }
  };
  return (
    <div className="center">
      <Button className="navBtn" onClick={() => handleClick()}>
        Back
      </Button>

      <Button
        className={currentStep === 4 ? "finishBtn" : "navBtn"}
        onClick={() => validateStep()}
      >
        {currentStep === 4 ? <Link to="/">Finish</Link> : "Next"}
      </Button>
    </div>
  );
}
