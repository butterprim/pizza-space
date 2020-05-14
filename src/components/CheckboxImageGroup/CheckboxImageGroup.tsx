import React, { FunctionComponent, ReactElement } from 'react';
import './CheckboxImageGroup.css';
import { ImageOptionProps, ImageOption } from '../ImageOption/ImageOption';

type CheckboxImageGroupProps = {
  values: string[];
  children?: ReactElement<ImageOptionProps>[];
  onToggle?: (value: string) => void;
};

export const CheckboxImageGroup: FunctionComponent<CheckboxImageGroupProps>  = ({values, children, onToggle }) => {
  const options: ReactElement<ImageOptionProps>[] = [];
  if (children) {
    React.Children.forEach(children, (child, childIndex) => {
      if (!React.isValidElement(child)) {
        return;
      }
      if (child.type === ImageOption) {
        const childValue = child.props.value || '';
        const imageOption = React.cloneElement(child, {
          onClick: onToggle,
          key: childIndex,
          isSelected: values.includes(childValue),
        });
        options.push(imageOption);
      }
    });
  }
  return (
    <div className="checkbox-image-group">
      {options}
    </div>
  );
};

