import React, { Component } from 'react';
import ReviewFormContainer from './ReviewFormContainer.js';
import ReviewTile from '../components/ReviewTile';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';


class ProgramShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      program: {},
      usernames: [],
      userVotes: [],
      user: {},
      deleted: false,
      errors: []
    }
    this.getData = this.getData.bind(this)
    this.vote = this.vote.bind(this)
    this.deleteProgram=this.deleteProgram.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.deleteReview=this.deleteReview.bind(this)
  }


  upVote(reviewId) {
    let newVote = {
      value: 2,
      review_id: reviewId,
      program_id: this.props.params.id
    }
    this.vote(newVote)
  }

  downVote(reviewId) {
    let newVote = {
      value: 0,
      review_id: reviewId,
      program_id: this.props.params.id
    }
    this.vote(newVote)
  }

  vote(vote){
    fetch(`/api/v1/programs/${this.props.params.id}/reviews/${vote.review_id}/votes`, {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(vote),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        reviews: body['reviews'],
        userVotes: body['userVotes']
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getData(programId){
    fetch(`/api/v1/programs/${programId}`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        program: body['program'],
        reviews: body['reviews'],
        usernames: body['usernames'],
        userVotes: body['userVotes'],
        user: body['user']

       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getData(this.props.params.id)
  }

  handleDelete(id) {
    this.deleteProgram(id)
  }

  deleteProgram(id) {
    let programId = this.props.params.id
    if(confirm('Are you sure you want to delete this program')) {
      fetch(`/api/v1/programs/${programId}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(body => {
        if ('error' in body) {
          this.setState({ errors: body['error'] })
        } else {
          browserHistory.push('/')
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  deleteReview(id) {
    let programId = this.props.params.id
    if(confirm('Are you sure you want to delete this review')) {
      fetch(`/api/v1/programs/${programId}/reviews/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(body => {
        if ('error' in body) {
          this.setState({ errors: body['error'] })
        } else {
          this.getData(programId)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  render(){
    let avgRating = 0

    if (this.state.reviews.length > 0) {
      this.state.reviews.forEach(review => {
        avgRating += review.rating
      })
      avgRating = avgRating/this.state.reviews.length
    }

    let error = this.state.errors.map((x, i) => {
      return(<p className='errors' key={i}>{x} </p>)
    })
    let deleteButton = []
    if (this.state.user) {
      if (this.state.user.role === 'admin') {
        deleteButton = [<button onClick={this.handleDelete.bind(this, program)}>Delete Program</button>]
      } else {
        deleteButton = []
      }
    }
    let program = this.state.program
    let reviews = this.state.reviews.map((review, i) => {
      let date = new Date(review.created_at);
      let shortdate = (date.getMonth()+1)+'-' + date.getDate() + '-'+date.getFullYear();
      let upVote = () => { this.upVote(review.id) }
      let downVote = () => { this.downVote(review.id) }
      let deleteReview = () => { this.deleteReview(review.id) }
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          data={review}
          username={this.state.usernames[i]}
          shortdate={shortdate}
          upVote={upVote}
          downVote={downVote}
          userVotes={this.state.userVotes}
          getData={this.getData}
          deleteReview={deleteReview}
        />
      )
    })


    return(
      <div className='center-align'>
        <h4 className='subtitle'>#Big_Night_In</h4>
        <div className=''>
          <div className="large-6 small-6 small-6 show-title">
            <h2>{program.title}</h2>
          </div>


          <div className="grid-x">
            <div className="large-5 medium-5 small-12 show-poster-div  cell">
              <img className='show-poster' src={program.poster_url} />
              <p className='bni-rating'>#B_N_I Rating: {avgRating}</p>
            </div>
            <div className="large-4 medium-4 small-12 show-details cell">
              <p>
                <br />
                <strong>Year: </strong>{program.year}<br />
                <strong>Rated: </strong>{program.rated}<br />
                <strong>Run Time: </strong>{program.run_time}<br />
                <strong>Genre: </strong>{program.genre}<br />
                <strong>Actor: </strong>{program.actor}<br />
                <strong>Plot: </strong>{program.plot}<br />
                <strong>Awards: </strong>{program.award}<br />
                <strong>IMDB Rating: </strong>{program.imdb_rating}<br />
                <strong>Total Seasons: </strong>{program.total_seasons}

              </p>
              {deleteButton}
              {error}
            </div>
          </div>



        </div>
        <div className='review-form grid-x '>
          <ReviewFormContainer
            program_id={this.props.params.id}
            reviews={this.state.reviews}
            getReviews={this.getData}
          />
        </div>
        <div className='callout reviews'>
          {reviews}
        </div>
      </div>
    )
  }
}

export default ProgramShowContainer;
