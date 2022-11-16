import { Button } from "reactstrap";
import './steps/steps.css'

export default function FormControl({ handleClick, currentStep, steps }) {
  return (
    <div className="center ">
      <Button className="navBtn" onClick={() => handleClick()}>Back</Button>

      <Button className="navBtn" onClick={() => handleClick("next")}>
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </Button>
    </div>
  );
}
