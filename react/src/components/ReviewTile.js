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
      <button onClick={props.upVote} type="button" className=''>
          <i className="fa fa-arrow-circle-o-up fa-5" aria-hidden="true" style="width: 40px"></i>
      </button>
      <button onClick={props.downVote} type="button" className=''>
          <i className="fa fa-arrow-circle-o-down fa-5" aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default ReviewTile;
