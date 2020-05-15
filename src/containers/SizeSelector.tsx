import React, { FunctionComponent, useContext } from 'react';
import { RadioButtonGroup } from '../components/RadioButtonGroup/RadioButtonGroup';
import { Button } from '../components/Button/Button';
import { SizeOption } from '../types/pizza';
import { PizzaContext } from '../store/PizzaStore';

export const SizeSelector: FunctionComponent<any> = () => {
  const [{ size }, dispatch] = useContext(PizzaContext);

  const handleSizeChange = (value: SizeOption) => {
    dispatch({ type: 'UPDATE_SIZE', payload: value });
  };

  return (
    <div className="size-selector">
      <RadioButtonGroup
        value={size}
        onSelect={(selectedValue) => handleSizeChange(selectedValue as SizeOption)}
      >
        <Button value="Small">Small</Button>
        <Button value="Medium">Medium</Button>
        <Button value="Large">Large</Button>
      </RadioButtonGroup>        
    </div>
  );
}
