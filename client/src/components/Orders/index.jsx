import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Order = (props) => {
  console.log(props);
  return (
    <Link to="/" className="individual-item">
      {/* {(photo && <img src={photo} alt={description} />) || (
        // <img src={defaultPhoto} alt={description} />
      )} */}
      <div>
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
