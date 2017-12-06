import React from 'react';
import { Link } from 'react-router';

const ProgramTile = props => {
  return(
    <div>
       <Link to={`/shows/${props.id}`}><h1>{props.title}</h1></Link>
    </div>
  )
}

export default ProgramTile;
