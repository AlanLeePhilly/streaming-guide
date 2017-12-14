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
      user: {},
      deleted: false,
      errors: []
    }
    this.deleteProgram=this.deleteProgram.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  componentDidMount(){
    let programId = this.props.params.id
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
        user: body['user']
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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

  render(){
    let error = this.state.errors.map(x => {
      return(<li key={x}>{x} </li>)
    })
    let deleteButton = []
    if (this.state.user.role === 'admin') {
      deleteButton = [<button onClick={this.handleDelete.bind(this, program)}>Delete Program</button>]
    } else {
      deleteButton = []
    }
    let program = this.state.program
    let reviews = this.state.reviews.map((review, i) => {
      let date = new Date(review.created_at);
      let shortdate = (date.getMonth()+1)+'-' + date.getDate() + '-'+date.getFullYear();
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          data={review}
          username={this.state.usernames[i]}
          shortdate={shortdate}
        />
      )
    })

    return(
      <div>
        <h1>Program Show Container</h1>
        <div className="row">
          <div className="large-6 small-6 small-6 columns">
            <p>{program.title}</p>
            <img className="show-page-poster" src={program.poster_url} />
          </div>
          <div className="large-6 small-6 small-6 columns">
            <p>
              <br /> <br /> <br />
              Year: {program.year}<br />
              Rated: {program.rated}<br />
              Run Time: {program.run_time}<br />
              Genre: {program.genre}<br />
              Actor: {program.actor}<br />
              Plot: {program.plot}<br />
              Awards: {program.award}<br />
              IMDB Rating: {program.imdb_rating}<br />
              Total Seasons: {program.total_seasons}
            </p>
            {deleteButton}
            {error}
          </div>
        </div>
        <div>
          <ReviewFormContainer
            program_id={this.props.params.id}
            reviews={this.state.reviews}
          />
        </div>
        {reviews}
      </div>
    )
  }
}

export default ProgramShowContainer;
