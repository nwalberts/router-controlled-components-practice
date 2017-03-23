import React from 'react';

const BodyField = props => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        onChange={props.handleDescriptionChange}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default BodyField;
