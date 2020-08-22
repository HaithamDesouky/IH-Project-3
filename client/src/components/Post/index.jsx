import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const PostItem = ({ _id, content, creationDate, creator, photo }) => {
  return (
    <Link to={`/post/${_id}`} className="individual-item">
      {photo && <img src={photo} alt={content} />}
      <div>
        <strong>{content}</strong>
        <small>
          By {creator.name} on {new Date(creationDate).toGMTString()}
        </small>
      </div>
    </Link>
  );
};

export default PostItem;
