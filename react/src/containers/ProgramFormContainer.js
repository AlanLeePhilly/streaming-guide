import React, { Component } from 'react';
import ProgramForm from '../components/ProgramForm';
import {browserHistory} from 'react-router';

class ProgramFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
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
      if (response.ok) {
        return response;
      } else {
        debugger
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      let id = body.program.length
      browserHistory.push(`/programs/${id}`)
    })
    .catch(error => {
      debugger
      this.setState({
        error: error.message
      })
      console.error(`Error in fetch: ${error.message}`)
    });
  }
  render(){
    return(
      <div>
        <ProgramForm
          addNewProgram= {this.addNewProgram}
        />

        <p>{this.state.error}</p>
      </div>
    )
  }
}
export default ProgramFormContainer;
