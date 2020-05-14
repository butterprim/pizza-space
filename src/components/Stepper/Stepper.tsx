import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Button } from '../Button/Button';
import { StepProps, Step } from '../Step/Step';
import './Stepper.css';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

type StepperProps = {
  children?: | ReactElement<StepProps>[];
};

export const Stepper: FunctionComponent<StepperProps> = ({ children = []}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  let steps: ReactElement<StepProps>[] = [];
  React.Children.forEach(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return;
    }
    if (child.type === Step) {
      steps.push(child);
    }
  });

  const totalSteps = steps.length;
  if (totalSteps === 0) {
    return null;
  }

  const activeStep = steps.length > 0 ? steps[currentStepIndex] : null;

  const handleStepChange = (nextStepIndex: number) => {
    if (nextStepIndex === totalSteps || nextStepIndex < 0) {
      return;
    }
    setCurrentStepIndex(nextStepIndex);
  };

  const backButton = currentStepIndex === 0 ? null : <Button onClick={() => handleStepChange(currentStepIndex-1)}>Back</Button>;
  const nextButton = currentStepIndex === (totalSteps-1) ? null : <Button onClick={() => handleStepChange(currentStepIndex+1)}>Next</Button>;

  return (
    <div className="stepper">
      <div className="stepper_indicator">{currentStepIndex+1} of {totalSteps}</div>
      <div className="stepper_active-step">
        {activeStep}
      </div>
      <ButtonGroup>
        {backButton}
        {nextButton}
      </ButtonGroup>
    </div>
  )
};