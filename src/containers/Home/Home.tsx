import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import './Home.css';
import { PizzaContext } from '../../store/PizzaStore';

export const Home: FunctionComponent<any> = () => {
  // eslint-disable-next-line
  const [pizza, dispatch] = useContext(PizzaContext);

  const handleStart = () => {
    dispatch({ type: 'RESET_PIZZA' });
  }

  return (
    <div className="home">
      <p className="home_description">Want to start crafting your own pizza?</p>
      <Link to="/order">
        <Button buttonType="primary" onClick={() => handleStart()}>Start</Button>
      </Link>
    </div>
  );
};
