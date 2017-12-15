import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  let upVoteClass = "fa fa-arrow-circle-o-up fa-2x voter"
  let downVoteClass = "fa fa-arrow-circle-o-down fa-2x voter"
  if (props.userVotes.length > 0) {
    let userVote = props.userVotes.filter(vote => {return vote.review_id == props.id})[0]
    if (userVote.value == 2) {
      upVoteClass = upVoteClass + " upvoted"
    } else if (userVote.value == 0) {
      downVoteClass = downVoteClass + " downvoted"
    }
  }


  return(
    <div className="grid-x">
      <div className=" callout secondary large-6 medium-6 small-10 review-tile">
        <p>
          <strong>{props.data.headline}</strong><br />
          {props.shortdate}<br />
          {props.username}<br /> <br />
          {props.data.body}<br />
          Rating: {props.data.rating}/10<br /> <br />
        </p>
        <div className='scorebox'>
          Score: {props.data.vote_count}<br />
          <button onClick={props.upVote} type="button" className='voter'>
              <i className={upVoteClass} aria-hidden="true"></i>
          </button>
          <button onClick={props.downVote} type="button" className='voter'>
              <i className={downVoteClass} aria-hidden="true"></i>
          </button>
        </div>
        <div className="button delete-button" >
          <button onClick={props.deleteReview} type="button">
           Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile;
