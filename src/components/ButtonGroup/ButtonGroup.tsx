import React, { FunctionComponent } from 'react';
import './ButtonGroup.css';

type ButtonGroupProps = {
  align?: 'center' | 'left' | 'right';
};

export const ButtonGroup: FunctionComponent<any> = ({ align = 'center', children }) => (
  <div className={`button-group align-${align}`}>
    {children}
  </div>
);