import React, { FunctionComponent } from 'react';
import './PriceBreakdownTable.css';
import { Pizza } from '../../types/pizza';
import { SIZE_PRICES, CRUST_PRICES, MAX_TOPPINGS, ADDITIONAL_TOPPINGS_PRICE } from '../../constants/prices';

type PriceBreakdownTableProps = {
  pizza: Pizza,
};

export const PriceBreakdownTable: FunctionComponent<PriceBreakdownTableProps> = ({ pizza }) => {
  let totalPrice = 0;
  totalPrice += SIZE_PRICES[pizza.size];
  totalPrice += CRUST_PRICES[pizza.crust];

  const additionalToppings = Math.max(pizza.toppings.length - MAX_TOPPINGS, 0);
  let additionalToppingsFee = 0;
  if (additionalToppings > 0) {
    additionalToppingsFee = additionalToppings * ADDITIONAL_TOPPINGS_PRICE
    totalPrice += additionalToppingsFee;
  }

  const toppingsList = pizza.toppings.map((name, index) => {
    return <div key={index}>{name}</div>
  });

  const convertToDisplayablePrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="price-breakdown-table">
        <div className="price-breakdown-table_row">
          <h3>Size</h3>
          <div className="price-breakdown-table_row-details">
            <div>{pizza.size} x 1 x {convertToDisplayablePrice(SIZE_PRICES[pizza.size])}</div>
            <div>{convertToDisplayablePrice(SIZE_PRICES[pizza.size])}</div>
          </div>
        </div>
        <div className="price-breakdown-table_row">
          <h3>Crust</h3>
          <div className="price-breakdown-table_row-details">
            <div>{pizza.crust} x 1 x {convertToDisplayablePrice(CRUST_PRICES[pizza.crust])}</div>
            <div>{convertToDisplayablePrice(CRUST_PRICES[pizza.crust])}</div>
          </div>
        </div>
        <div className="price-breakdown-table_row">
          <h3>Toppings <div className="caption">Pizza comes with 3 free toppings</div></h3>
          <div className="price-breakdown-table_row-list">
            {toppingsList}
          </div>
          <div className="price-breakdown-table_row-details">
            <div>{`Extra toppings x ${additionalToppings} x ${convertToDisplayablePrice(ADDITIONAL_TOPPINGS_PRICE)}`}</div>
            <div>{convertToDisplayablePrice(additionalToppingsFee)}</div>
          </div>
        </div>
        <div className="price-breakdown-table_row">
          <div className="price-breakdown-table_row-details">
            <h3>Total</h3>
            <div className="price-breakdown-table_total-price">{convertToDisplayablePrice(totalPrice)}</div>
          </div>
        </div>
    </div>
  );
};
