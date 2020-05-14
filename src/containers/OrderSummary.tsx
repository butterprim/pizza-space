import React, { FunctionComponent, useContext } from 'react';
import { PizzaContext } from '../store/PizzaStore';
import { PriceBreakdownTable } from '../components/PriceBreakdownTable/PriceBreakdownTable';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Link } from 'react-router-dom';

export const OrderSummary: FunctionComponent<any> = () => {
  // eslint-disable-next-line
  const [pizza, dispatch] = useContext(PizzaContext);

  return (
    <div className="order-summary">
      <PriceBreakdownTable pizza={pizza}/>
      <ButtonGroup>
        <Link to="/">
          <Button buttonType="secondary">Back to home</Button>
        </Link>
        {/* <Button buttonType="primary">Place order</Button> */}
      </ButtonGroup>
    </div>
  );
}
