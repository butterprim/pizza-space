import React, { FunctionComponent, useState, useEffect } from 'react';
import { PriceBreakdownTable } from '../components/PriceBreakdownTable/PriceBreakdownTable';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Link } from 'react-router-dom';
import { Pizza } from '../types/pizza';
import { Page } from '../components/Page/Page';

export const OrderReceipt: FunctionComponent<any> = ({ match }) => {
  const [pizza, setPizza] = useState<Pizza>({ size: 'Small', crust: 'Thin', toppings: []});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const pizzaRefId = match.params.id;
  
  useEffect(() => {
    if (isLoaded) {
      return;
    }

    fetch(`/.netlify/functions/orders-get?q=${pizzaRefId}`).then(response => response.json())
    .then((data) => {
      setIsLoaded(true);
      setPizza(data);
    })
    .catch((e) => {

    });
  });

  let breakdownTable = <div className="page_loading">Loading...</div>;
  if (isLoaded) {
    breakdownTable = <PriceBreakdownTable pizza={pizza}/>;
  }

  return (
    <Page title={`Order Reference No. ${pizzaRefId}`}>
      <div className="order-tracker">
        {breakdownTable}
        <ButtonGroup>
          <Link to="/">
            <Button buttonType="secondary">Back to home</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Page>
  );
}
