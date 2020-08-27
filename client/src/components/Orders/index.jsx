import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Order = props => {
  console.log('lolol', props);
  return (
    <Link to={`/order/${props._id}`} className="individual-item">
      <div>
        <strong>Total Credits: {props.total}</strong>
        <strong>
          Order:{' '}
          {props.basket.length &&
            props.basket.map(
              item => item.quantity + 'x ' + item.lootBox.name + ' | '
            )}
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
