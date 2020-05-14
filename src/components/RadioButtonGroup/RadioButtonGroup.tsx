import React, { FunctionComponent, ReactElement } from 'react';
import './RadioButtonGroup.css';
import { Button, ButtonProps } from '../Button/Button';

type RadioButtonGroupProps = {
  value: string;
  children?: ReactElement<ButtonProps>[];
  onSelect?: (value: string) => void;
};

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps>  = ({value, children, onSelect }) => {
  const options: ReactElement<ButtonProps>[] = [];
  if (children) {
    React.Children.forEach(children, (child, childIndex) => {
      if (!React.isValidElement(child)) {
        return;
      }
      if (child.type === Button) {
        const childValue = child.props.value || child.props.children;
        const buttonOption = React.cloneElement(child, {
          onClick: onSelect,
          buttonType: childValue === value ? 'primary' : 'secondary',
          key: childIndex,
          icon: childValue === value ? 'check_circle' : '',
        });
        options.push(buttonOption);
      }
    });
  }
  return (
    <div className="radio-button-group">
      {options}
    </div>
  );
};

