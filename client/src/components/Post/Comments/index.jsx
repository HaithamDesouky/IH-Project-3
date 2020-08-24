import React from 'react';

const CommentInput = props => {
  const handleFormSubmission = event => {
    event.preventDefault();
    props.onFormSubmission();
  };

  const handleFormInputChange = event => {
    props.onInputChange(event);
  };

  return (
    <form
      onSubmit={handleFormSubmission}
      onChange={handleFormInputChange}
      redirect="/"
    >
      <label htmlFor="comment-content"></label>
      <textarea
        name="commentContent"
        placeholder="Leave a comment for the above post!"
        id="comment-content"
        value={props.commentContent}
      ></textarea>
      <button>Write Comment</button>
    </form>
  );
};

export default CommentInput;
