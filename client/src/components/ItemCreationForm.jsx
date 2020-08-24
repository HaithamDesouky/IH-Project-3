import React from 'react';

const ItemCreationForm = props => {
  const handleFormSubmission = event => {
    event.preventDefault();
    props.onFormSubmission();
  };

  const handleFormInputChange = event => {
    props.onInputChange(event);
  };

  const handlePhotoInputChange = event => {
    const file = event.target.files[0];
    props.onPhotoChange(file);
  };

  return (
    <form
      onSubmit={handleFormSubmission}
      onChange={handleFormInputChange}
      redirect="/"
    >
      <label htmlFor="name-input">Item Name</label>
      <input
        id="name-input"
        placeholder="Enter the name of the item"
        name="name"
        value={props.name}
      />

      <label htmlFor="item-list">Type</label>
      <select id="item-list" name="itemType">
        <option value={props.itemType}>Please Select One</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
        <option value="Misc">Misc</option>
        <option value="Special">Special</option>
      </select>
      <label htmlFor="description-input">Item Description</label>
      <textarea
        id="description-input"
        placeholder="input description"
        name="description"
        value={props.description}
      />
      <label htmlFor="input-photo">Photo</label>
      <input type="file" name="photo" onChange={handlePhotoInputChange} />
      <button>{props.isEdit ? 'Edit Post' : 'Submit Item'}</button>
    </form>
  );
};

export default ItemCreationForm;
