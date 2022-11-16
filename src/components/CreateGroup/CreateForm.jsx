import React, { useState } from "react";
import Form from "./Form";
import FormControl from "./FormControl";
import { UseContextProvider } from "./FormContext";
import CreateGroup from "./steps/CreateGroup";
import AddStudents from "./steps/AddStudents";
import AddTasks from "./steps/AddTasks";
import Details from "./steps/Details";
import Final from "./steps/Final";
import './steps/steps.css'

function CreateForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Group Name", "Student's Names", "Task's", "Details", "Final"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <CreateGroup />;
      case 2:
        return <AddStudents />;
      case 3:
        return <AddTasks />;
      case 4:
        return <Details />;
      case 5:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div>
      <div  className="test" >
        <Form steps={steps} currentStep={currentStep} className="test" />

        <div>
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {currentStep !== steps.length && (
        <FormControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default CreateForm;
