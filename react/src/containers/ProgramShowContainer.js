import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ProgramShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      program: {}
    }
  }

  componentDidMount(){
    let programId = this.props.params.id
    fetch(`/api/v1/programs/${programId}`)
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
        reviews: body['reviews']
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let program = this.state.program
    let reviews = this.state.reviews.map(review => {
      let date = new Date(review.created_at);
      let shortdate = (date.getMonth()+1)+'-' + date.getDate() + '-'+date.getFullYear();
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          data={review}
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
          </div>
        </div>
        {reviews}
      </div>
    )
  }
}

export default ProgramShowContainer;
