import React from 'react';
import { Link } from 'react-router';

const ProgramTile = props => {
  return(
    <div>
      <Link to={`/shows/${props.id}`}>
        <img src={props.poster_url}></img>
        <h1>{props.title}</h1>
      </Link>
    </div>
  )
}

export default ProgramTile;
