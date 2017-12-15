import React from 'react';
import { Link } from 'react-router';

const ProgramTile = props => {
  return(
    <div className="large-3 medium-6 small-12 center-align callout program-tile">
      <Link to={`/programs/${props.id}`}>
        <img className="program-tile-pic grid-x center-align" src={props.poster_url}></img>
        <h5 className='index-text'>{props.title}</h5>
      </Link>
    </div>
  )
}

export default ProgramTile;
