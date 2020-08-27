import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import defaultPhoto from "./default.png";

const Item = ({ _id, name, description, photo, itemType }) => {
  return (
    <Link to={`/items/${_id}`} className="individual-item">
      {(photo && <img src={photo} alt={description} />) || (
        <img src={defaultPhoto} alt={description} />
      )}
      <div>
        <strong>{name}</strong>
        <p>{description}</p>
        <small>{itemType}</small>
      </div>
    </Link>
  );
};

export default Item;
