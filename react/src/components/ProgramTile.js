import React from 'react';
import { Link } from 'react-router';

const ProgramTile = props => {
  return(
    <div className="large-2 medium-3 small-12 columns">
      <Link to={`/programs/${props.id}`}>
        <img className="program-tile" src={props.poster_url}></img>
        <h5>{props.title}</h5>
      </Link>
    </div>
  )
}

export default ProgramTile;
