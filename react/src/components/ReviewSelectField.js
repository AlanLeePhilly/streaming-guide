import React, { Component } from 'react';

const ReviewSelectField = props => {
  return(
    <label>
      Rank this show!
      <select id={props.id}value={props.rating} onChange={props.onChange}>
        <option value="0">0-Unrated</option>
        <option value="1">1-Dreadful</option>
        <option value="2">2-Awful</option>
        <option value="3">3-Poopy</option>
        <option value="4">4-Boring</option>
        <option value="5">5-Not worth watching</option>
        <option value="6">6-Watch once</option>
        <option value="7">7-Worth watching twice</option>
        <option value="8">8-Well done</option>
        <option value="9">9-Very well done</option>
        <option value="10">10-Brilliant</option>
      </select>
    </label>
  )
}

export default ReviewSelectField;
