import React, { FunctionComponent, useContext, useState } from 'react';
import { PizzaContext } from '../store/PizzaStore';
import { PriceBreakdownTable } from '../components/PriceBreakdownTable/PriceBreakdownTable';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export const OrderSummary: FunctionComponent<any> = () => {
  // eslint-disable-next-line
  const [pizza, dispatch] = useContext(PizzaContext);
  const [pizzaRefId, setPizzaRefId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePlaceOrder = () => {
    setIsLoading(true);
    setErrorMessage('');

    return fetch(`/.netlify/functions/orders-create?q=${JSON.stringify(pizza)}`).then(response => response.json())
    .then((data) => {
      setIsLoading(false);
      setPizzaRefId(data);
    })
    .catch(()=> {
      setErrorMessage('There was a problem in processing your request.');
      setIsLoading(false);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  let getReceiptButton = null;
  if (pizzaRefId) {
    getReceiptButton = (
      <Link to={`/receipt/${pizzaRefId}`}>
        <Button buttonType="primary">Get receipt</Button>
      </Link>
    );
  }
  let orderButton = null;
  if (!pizzaRefId) {
    orderButton = (
      <Button buttonType="primary" onClick={handlePlaceOrder} isDisabled={isLoading}>{isLoading ? "Placing order..." : "Place order"}</Button>
    );
  }

  return (
    <div className="order-summary">
      <PriceBreakdownTable pizza={pizza}/>
      <ButtonGroup>
        <Link to="/">
          <Button buttonType="secondary">Back to home</Button>
        </Link>
        {orderButton}
        {getReceiptButton}
      </ButtonGroup>
      <ErrorMessage message={errorMessage}/>
    </div>
  );
}
