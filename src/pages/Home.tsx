import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { PizzaContext } from '../store/PizzaStore';
import { Page } from '../components/Page/Page';

export const Home: FunctionComponent<any> = () => {
  // eslint-disable-next-line
  const [pizza, dispatch] = useContext(PizzaContext);

  const handleStart = () => {
    dispatch({ type: 'RESET_PIZZA' });
  }

  return (
    <Page title="Want to start crafting your own pizza?">
      <Link to="/order">
        <Button buttonType="primary" onClick={() => handleStart()}>Start</Button>
      </Link>
    </Page>
  );
};
