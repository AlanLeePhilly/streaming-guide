import React, { Component } from 'react';

const ReviewSelectField = props => {
  return(
    <label>
      Rank this show!
      <select id={props.id}value={props.rating} onChange={props.onChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </label>
  )
}

export default ReviewSelectField;
