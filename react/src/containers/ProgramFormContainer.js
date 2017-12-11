import React, { Component } from 'react';
import ProgramForm from '../components/ProgramForm';

const ProgramFormContainer = () => {


  let addNewProgram = (newProgram) => {
    debugger
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
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      return body
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

    return(
    <ProgramForm
      addNewProgram= {addNewProgram}
    />
    )
}
export default ProgramFormContainer;
