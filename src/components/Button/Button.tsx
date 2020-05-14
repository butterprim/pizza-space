import React, { FunctionComponent } from 'react';
import './Button.css';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

export type ButtonProps = {
  value?: string;
  buttonType?: string;
  icon?: string;
  onClick?: (value: string) => void;
  children?: string;
};

export type ButtonComponent = FunctionComponent<ButtonProps>;

export const Button: ButtonComponent  = ({value, buttonType = 'tertiary', icon = '', children, onClick = (value)=>null }) => {
  const buttonIcon = icon ? <span className="icon material-icons">{icon}</span> : null;
  return (
    <button
      type="button"
      className={`button ${buttonType}`}
      onClick={(e) => onClick(value || '')}
    >{buttonIcon} { children }</button>
  );
}