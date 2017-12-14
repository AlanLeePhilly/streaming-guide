import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  let upVoteClass = "fa fa-arrow-circle-o-up fa-5 voter"
  let downVoteClass = "fa fa-arrow-circle-o-down fa-5 voter"
  if (props.userVote) {
    if (userVote.value == 2) {
      upVoteClass = upVoteClass + " upvoted"
    } else if (userVote.value == 0) {
      downVoteClass = downVoteClass + " downvoted"
    }
  }


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
          <i className={upVoteClass} aria-hidden="true"></i>
      </button>
      <button onClick={props.downVote} type="button" className=''>
          <i className={downVoteClass} aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default ReviewTile;
