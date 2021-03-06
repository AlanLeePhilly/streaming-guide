import React, { Component } from 'react';
import ProgramForm from '../components/ProgramForm';
import {browserHistory} from 'react-router';

class ProgramFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    };
    this.addNewProgram = this.addNewProgram.bind(this)
  }

  addNewProgram(newProgram){
    fetch('/api/v1/programs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProgram),
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok || response.status === 422 || response.status === 404) {
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
        browserHistory.push(`/programs/${body.program.id}`)
      }
    })
    .catch(error => {
      this.setState({
        error: error.message
      })
      console.error(`Error in fetch: ${error.message}`)
    });
  }
  render(){
    let errors = this.state.errors.map((error, i) => {
      return( <p className='errors' key={i}>{error}</p> )
    })

    return(
      <div>
        <ProgramForm
          addNewProgram= {this.addNewProgram}
        />

        {errors}
      </div>
    )
  }
}
export default ProgramFormContainer;
