import React, { FunctionComponent } from 'react';
import './Step.css';

export type StepProps = {
  title: string;
}

export const Step: FunctionComponent<StepProps> = ({ title, children }) => {
  return (
    <div className="step">
      <h1 className="step_title">{title}</h1>
      <div className="step_content">
        {children}
      </div>
    </div>
  );
};
