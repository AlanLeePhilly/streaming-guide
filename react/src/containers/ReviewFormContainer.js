import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
    this.addNewReview = this.addNewReview.bind(this)
  }

  addNewReview(newReview){
    let program_id = newReview.program_id
    fetch(`/api/v1/programs/${program_id}/reviews`, {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok || response.status === 422) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if ('error' in body) {
        this.setState({ errors: body['error'] })
      } else {
        this.setState({ errors: [] })
          this.props.getReviews(program_id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let errors = this.state.errors.map(error => {
      return( <li>{error}</li> )
    })

    return(
      <div className='large-8 medium-10 small-12'>
        {errors}
        <ReviewForm
          program_id = {this.props.program_id}
          addNewReview = {this.addNewReview}
        />
    </div>
    )
  }
}

export default ReviewFormContainer;
