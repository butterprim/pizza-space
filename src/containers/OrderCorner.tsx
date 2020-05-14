import React, { FunctionComponent } from 'react';
import { SizeSelector } from './SizeSelector';
import { CrustSelector } from './CrustSelector';
import { ToppingSelector } from './ToppingsSelector';
import { OrderSummary } from './OrderSummary';
import { Stepper } from '../components/Stepper/Stepper';
import { Step } from '../components/Step/Step';

export const OrderCorner: FunctionComponent<any> = () => {
  return (
    <div className="order-corner">
      <Stepper>
        <Step title="Choose your size">
          <SizeSelector/>
        </Step>
        <Step title="Choose your crust">
          <CrustSelector/>
        </Step>
        <Step title="Choose your toppings">
          <ToppingSelector/>
        </Step>
        <Step title="Check your custom pizza">
          <OrderSummary/>
        </Step>
      </Stepper>
    </div>
  );
};
