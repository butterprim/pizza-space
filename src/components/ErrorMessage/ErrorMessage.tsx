import React, { FunctionComponent } from 'react';
import './ErrorMessage.css';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) =>  (
  <div className="error-message">{message}</div>
);