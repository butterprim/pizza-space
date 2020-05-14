import React, { FunctionComponent, useContext } from 'react';
import { RadioButtonGroup } from '../components/RadioButtonGroup/RadioButtonGroup';
import { Button } from '../components/Button/Button';
import { CrustOption } from '../types/types';
import { PizzaContext } from '../store/PizzaStore';

export const CrustSelector: FunctionComponent<any> = () => {
  const [{ crust }, dispatch] = useContext(PizzaContext);

  const handleCrustChange = (value: CrustOption) => {
    dispatch({ type: 'UPDATE_CRUST', payload: value });
  };

  return (
    <div className="crust-selector">
      <RadioButtonGroup
        value={crust}
        onSelect={(selectedValue) => handleCrustChange(selectedValue as CrustOption)}
      >
        <Button value="Thin">Thin</Button>
        <Button value="Thick">Thick</Button>
      </RadioButtonGroup>
    </div>
  );
};
