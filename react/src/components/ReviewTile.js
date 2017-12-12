import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  return(
    <div className="review-tile callout secondary large-6 medium-2 small-4 cell">
      <p>
        <strong>{props.data.headline}</strong><br />
        {props.shortdate}<br />
        {props.username}<br /> <br />
        {props.data.body}<br />
        Rating: {props.data.rating}/10<br /> <br />
        Vote Score: {props.data.vote_count}
      </p>
    </div>
  )
}

export default ReviewTile;
