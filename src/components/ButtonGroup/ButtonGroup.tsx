import React, { FunctionComponent } from 'react';
import './ButtonGroup.css';

export const ButtonGroup: FunctionComponent<any> = ({ children }) => (
  <div className="button-group">
    {children}
  </div>
);