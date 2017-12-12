import React from 'react';

const UrlField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        type='text'
        value={props.content}
        onChange = {props.handleUrlChange}
      />
    </label>
  );
}

export default UrlField;
