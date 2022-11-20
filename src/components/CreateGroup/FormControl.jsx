import { Button } from "reactstrap";
import "./steps/steps.css";

export default function FormControl({ handleClick, currentStep }) {
  return (
    <div className="center ">
      <Button className="navBtn" onClick={() => handleClick()}>
        Back
      </Button>

      <Button className="navBtn" onClick={() => handleClick("next")}>
        {currentStep === 4 ? "save Group after finishing editing" : "Next"}
      </Button>
    </div>
  );
}
