import React, { Component } from 'react';
import ProgramTile from '../components/ProgramTile';
import { Link } from 'react-router';

class ProgramsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/programs')
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
      this.setState({ programs: body['programs']})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let programs = this.state.programs.map(program => {
      return(
        <ProgramTile
          key={program.id}
          id={program.id}
          title={program.title}
          poster_url={program.poster_url}

        />
      )
    })

    return(
      <div>
        <h1>Programs Index Page</h1>
        <Link to='/programs/new'> Add Program </Link>
        <div className="grid-x grid-margin-x">
          {programs}
        </div>
      </div>
    )
  }
}

export default ProgramsContainer;
