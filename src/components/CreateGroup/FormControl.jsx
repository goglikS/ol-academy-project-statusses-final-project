import { useState } from "react";
import { Button } from "reactstrap";
import useLocalStorage from "../LocalStorage";
import "./steps/steps.css";

export default function FormControl({ handleClick, currentStep }) {
  const [groupData, setGroupData] = useLocalStorage("groupData");

  return (
    <div className="center ">
      <Button className="navBtn" onClick={() => handleClick()}>
        Back
      </Button>

      <Button
        className="navBtn"
        onClick={
          currentStep < 4
            ? () => handleClick("next")
            : () => console.log(groupData)
        }
      >
        {currentStep === 4 ? "Add Group" : "Next"}
      </Button>
    </div>
  );
}
