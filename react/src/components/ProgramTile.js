import React from 'react';
import { Link } from 'react-router';

const ProgramTile = props => {
  return(
    <div className="large-6 medium-2 small-4 cell">
      <Link to={`/programs/${props.id}`}>
        <img className="program-tile" src={props.poster_url}></img>
        <h1>{props.title}</h1>
      </Link>
    </div>
  )
}

export default ProgramTile;
