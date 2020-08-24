import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import defaultPhoto from './default.jfif';

const Comment = ({ _id, creator, content, createdAt }) => {
  console.log('data', createdAt);
  return (
    <Link to={`/items/${_id}`} className="individual-item">
      {(creator.photo && <img src={creator.photo} alt={content} />) || (
        <img src={defaultPhoto} alt={content} />
      )}
      <div>
        <strong>{creator.name}</strong>
        <p>{content}</p>
        <small>{new Date(createdAt).toGMTString()}</small>
      </div>
    </Link>
  );
};

export default Comment;
