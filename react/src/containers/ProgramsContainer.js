import React, { Component } from 'react';
import ProgramTile from '../components/ProgramTile';
import { Link } from 'react-router';

class ProgramsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      programs: [],
      currentPage: 1,
      programsPerPage: 8
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount(){
    fetch('/api/v1/programs', {
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
      this.setState({ programs: body['programs']})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    const { programs, currentPage, programsPerPage } = this.state;

    const indexOfLastProgram = currentPage * programsPerPage;
    const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
    const currentProgram = programs.slice(indexOfFirstProgram, indexOfLastProgram);

    const renderPrograms = currentProgram.map((program, index) => {
      return(
        <ProgramTile
          key={program.id}
          id={program.id}
          title={program.title}
          poster_url={program.poster_url}
        />
      )
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(programs.length / programsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className='button pager'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return(
      <div>
        <div><h1 className='grid-x align-center title'>#Big_Night_In</h1></div>
        <div className='grid-x align-center index-display '>{renderPrograms}</div>
        <div className='grid-x align-center' id="page-numbers" >{renderPageNumbers}</div>
        <div className='grid-x align-center add-program-link'><Link to='/programs/new'> Add Program </Link></div>
      </div>
    )
  }
}

export default ProgramsContainer;
