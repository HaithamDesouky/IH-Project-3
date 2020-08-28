import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Order = props => {
  console.log('lolol', props);
  return (
    <Link
      to={`/order/${props._id}`}
      className="individual-item individual-order"
    >
      <div>
        <strong>
          {' '}
          <span>Total Credits</span>:{props.total}
        </strong>
        <strong>
          <span>Order</span>:{' '}
          <ul>
            {props.basket.length &&
              props.basket.map(item => {
                return <li>{item.quantity + 'x ' + item.lootBox.name}</li>;
              })}
          </ul>
        </strong>
        {
          /* <p>{description}</p>*/
          <small>Date: {new Date(props.creationDate).toGMTString()}</small>
        }
      </div>
    </Link>
  );
};

export default Order;
