import React, { FunctionComponent } from 'react';
import './ImageOption.css';

export type ImageOptionType = 'primary' | 'secondary' | 'tertiary';

export type ImageOptionProps = {
  imageSrc: string;
  value?: string;
  isSelected?: boolean;
  onClick?: (value: string) => void;
  children?: string;
};

export const ImageOption: FunctionComponent<ImageOptionProps>  = ({imageSrc, value = '', isSelected = false, onClick = (value)=>null }) => {
  const imageOptionLabel = value ? <div className="image-option_label">{value}</div> : null;
  
  return (
    <div className={`image-option ${isSelected ? 'selected' : ''}`} onClick={() => onClick(value)}>
      <div className="image-option_image-wrapper">
        <img src={imageSrc} alt={value || 'an image'}/>
      </div>
      {imageOptionLabel}
    </div>
  );
}
