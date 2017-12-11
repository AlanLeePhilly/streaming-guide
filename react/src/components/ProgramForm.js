import React, { Component } from 'react';
import UrlField from '../components/UrlField';


class ProgramForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      programUrl: '',
      program: {}
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAddNewProgram = this.handleAddNewProgram.bind(this);
  }

  handleUrlChange(event){
    this.setState({ programUrl: event.target.value });
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({ programUrl: '', program: {} });
  }

  handleAddNewProgram(event){
    event.preventDefault();
      let formPayload = this.state.programUrl;
      let newProgram = this.externalAPIFetch(formPayload)
      this.setState({ programUrl: '', program: {} });
  }

  externalAPIFetch(imdbUrl){
    let start = imdbUrl.indexOf("title")+6
    let imdbId = imdbUrl.substring(start, start+9)
    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=2875cd3c`)
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
      let newProgram = {
          title: body.Title,
          year: body.Year,
          rated: body.Rated,
          run_time: body.Runtime,
          genre: body.Genre,
          actor: body.Actors,
          plot: body.Plot,
          award: body.Awards,
          poster_url: body.Poster,
          imdb_rating: body.imdbRating,
          imdb_id: body.imdbID,
          total_seasons: parseInt(body.totalSeasons),
          user_id: 1
      }
      this.props.addNewProgram(newProgram);
      return newProgram
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return(
      <form className="new-program-form" onSubmit={this.handleAddNewProgram}>
        <UrlField
          content={this.state.programUrl}
          label="Program Url"
          name="program-url"
          handleUrlChange = {this.handleUrlChange}
        />
          <div className="button-group">
            <button className="button" onClick = {this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" onClick = {this.handleAddNewArticle} />
          </div>
      </form>
    )
  }
}
export default ProgramForm;
