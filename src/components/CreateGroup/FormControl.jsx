import { Button } from "reactstrap";
import './steps/steps.css'

export default function FormControl({ handleClick, currentStep, steps }) {
  return (
    <div className="center ">
      <Button className="navBtn" onClick={() => handleClick()}>Back</Button>

      <Button className="navBtn"   onClick={ currentStep > 4 ? console.log("confirm") : () => handleClick("next")}>
        {currentStep ===  4 ? "Confirm" : "Next"}
      </Button>
    </div>
  );
}
