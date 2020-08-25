import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Order = props => {
  console.log('lolol', props);
  return (
    <Link to="/" className="individual-item">
      {/* {(photo && <img src={photo} alt={description} />) || (
        // <img src={defaultPhoto} alt={description} />
      )} */}
      <div>
        {/* {props.basket.length && <h3>{props.basket[0]}</h3>} */}
        {/*  */}
        <strong>{props.total}</strong>
        {
          /* <p>{description}</p>*/
          <small>{new Date(props.creationDate).toGMTString()}</small>
        }
      </div>
    </Link>
  );
};

export default Order;
