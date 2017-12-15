import React, { Component } from 'react';

const ReviewSelectField = props => {
  return(
    <label>
      Rank this show!
      <select id={props.id}value={props.rating} onChange={props.onChange}>
        <option value="0">0-The Worst</option>
        <option value="1">1-Dreadful</option>
        <option value="2">2-Awful</option>
        <option value="3">3-Poopy</option>
        <option value="4">4-Boring</option>
        <option value="5">5-Not Worth Watching</option>
        <option value="6">6-Watch Once</option>
        <option value="7">7-Worth Watching Twice</option>
        <option value="8">8-Well Done</option>
        <option value="9">9-Very Well Done</option>
        <option value="10">10-Brilliant</option>
      </select>
    </label>
  )
}

export default ReviewSelectField;
