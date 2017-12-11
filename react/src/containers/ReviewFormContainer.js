import React, { Component } from 'react';
import ReviewTextInputField from '../components/ReviewTextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      body: '',
      rating: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.onChange=this.onChange.bind(this)
  }

  handleFormSubmit(event) {
    let newReview = {
      headline: this.state.headline ,
      body: this.state.body,
      rating: this.state.rating,
      program_id: this.props.program_id.id
    }
    this.props.addNewReview(newReview);
    handleClearForm(event);
  }

  handleClearForm(event) {
    this.setState({
      headline: '',
      body: '',
      rating: ''
    })
  }

  onChange(event) {
    this.setState( { [event.target.id]: event.target.value  } )
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <ReviewTextInputField
          id="headline"
          label="Headline"
          name="headline"
          value={this.state.headline}
          onChange={this.onChange}
        />
        <ReviewTextInputField
          id="body"
          label="Review"
          name="body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <ReviewTextInputField
          id="rating"
          label="Rating (0-10)"
          name="rating"
          value={this.state.rating}
          onChange={this.onChange}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
