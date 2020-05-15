import React, { FunctionComponent, useState, useEffect } from 'react';
import { PriceBreakdownTable } from '../components/PriceBreakdownTable/PriceBreakdownTable';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Link } from 'react-router-dom';
import { Pizza } from '../types/pizza';
import { Page } from '../components/Page/Page';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export const OrderReceipt: FunctionComponent<any> = ({ match }) => {
  const [pizza, setPizza] = useState<Pizza>({ size: 'Small', crust: 'Thin', toppings: []});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const pizzaRefId = match.params.id;
  
  useEffect(() => {
    if (isLoaded) {
      return;
    }

    fetch(`/.netlify/functions/orders-get?q=${pizzaRefId}`).then(response => response.json())
    .then((data) => {
      setErrorMessage('');
      setIsLoaded(true);
      setPizza(data);
    })
    .catch((e) => {
      setErrorMessage('There was a problem in processing your request.');
    });
  });

  let loadingNotif = null;
  if (!isLoaded && !errorMessage) {
    loadingNotif = <div className="page_loading">Loading</div>;
  }

  let breakdownTable = null;
  if (isLoaded) {
    breakdownTable = <PriceBreakdownTable pizza={pizza}/>;
  }

  return (
    <Page title={`Order Reference No. ${pizzaRefId}`}>
      <div className="order-tracker">
        {loadingNotif}
        {breakdownTable}
        <ErrorMessage message={errorMessage}/>
        <ButtonGroup>
          <Link to="/">
            <Button buttonType="secondary">Back to home</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Page>
  );
}
