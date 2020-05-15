import React, { FunctionComponent, useContext, useState } from 'react';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { PizzaContext } from '../store/PizzaStore';
import { SizeOption } from '../types/pizza';
import { TOPPINGS, TOPPINGS_IMAGES } from '../constants/toppings';
import { CheckboxImageGroup } from '../components/CheckboxImageGroup/CheckboxImageGroup';
import { ImageOption } from '../components/ImageOption/ImageOption';

export const ToppingSelector: FunctionComponent<any> = () => {
  const [{ size, toppings }, dispatch] = useContext(PizzaContext);
  const [errorMessage, setErrorMessage] = useState('');

  const toppingsMax: Record<SizeOption, number> = {
    'Small': 5,
    'Medium': 7,
    'Large': 9,
  };

  const handleToppingsChange = (value: string) => {
    let newToppings = null;
    if (toppings.includes(value)) {
      newToppings = toppings.filter(toggledValue => toggledValue !== value);
    } else {
      newToppings = [...toppings, value];
    }

    if (newToppings.length > toppingsMax[size]) {
      const errorMessage = `You can only add up to ${toppingsMax[size]} toppings.`;
      setErrorMessage(errorMessage);
    } else {
      setErrorMessage('');
      dispatch({ type: 'UPDATE_TOPPINGS', payload: newToppings });
    }
  }

  const toppingButtons = TOPPINGS.map((name, index) => {
    return (
      <ImageOption key={index} imageSrc={TOPPINGS_IMAGES[name]} value={name}/>
    )
  });

  return (
    <div className="topping-selector">
      <p>Pizza comes with 3 free toppings. Any additional toppings will be charged.</p>
      <CheckboxImageGroup values={toppings} onToggle={(toggledValue) => handleToppingsChange(toggledValue)}>
        {toppingButtons}
      </CheckboxImageGroup>
      <ErrorMessage message={errorMessage}/>
    </div>
  );
}
