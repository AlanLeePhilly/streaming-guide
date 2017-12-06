import React, { Component } from 'react';
import ProgramTile from '../components/ProgramTile';

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
      let parsed = response.json()
      return parsed
    }).then(programs => {
      this.setState({ programs: programs})
    })
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
        <h1>Shows Are Great</h1>
        {programs}
      </div>
    )
  }
}

export default ProgramsContainer;
