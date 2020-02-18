import React, { Component } from 'react';
import './SearchResults.css';
import { searchRepositories } from '../../apiCalls';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      foundRepos: [],
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchRepos = async () => {
    if(this.state.userInput) {
      const repositories = await searchRepositories(this.state.userInput);
      this.setState({ foundRepos: repositories.items });
    }
  }

  render() {
    console.log(this.state.foundRepos);
    return (
      <div className="SearchResults">
        <input type='text' name='userInput' value={this.state.userInput} onChange={this.handleChange}></input>
        <button onClick={this.searchRepos}>Search</button>
      </div>
    )
  }
}

export default SearchResults;
