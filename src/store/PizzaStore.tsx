import React, { Context, FunctionComponent, useReducer } from 'react';
import { Pizza } from '../types/types';

const defaultPizza: Pizza = {
  size: 'Small',
  crust: 'Thin',
  toppings: [],
};

export const PizzaContext: Context<[Pizza, any]> = React.createContext([defaultPizza, null]);

type PizzaAction = { type: string, payload: any };
type PizzaReducer = (state: Pizza, action: PizzaAction) => Pizza;

const reducer: PizzaReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_SIZE':
      return {...state, size: action.payload};
    case 'UPDATE_CRUST':
      return {...state, crust: action.payload};
    case 'UPDATE_TOPPINGS':
      return {...state, toppings: action.payload};
    case 'RESET_PIZZA':
      return {...defaultPizza};
    default:
      return state;
  }
};

export const PizzaStore: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultPizza);
  return (
    <PizzaContext.Provider value={[state, dispatch]}>
      {children}
    </PizzaContext.Provider>
  );
};
