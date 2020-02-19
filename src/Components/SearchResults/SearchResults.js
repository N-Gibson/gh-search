import React, { Component } from 'react';
import './SearchResults.css';
import { searchRepositories } from '../../apiCalls';
import Result from '../Result/Result';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      foundRepos: [],
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
    let renderFoundRepos = this.state.foundRepos.map(repo => <Result key={repo.id} data={repo} />)

    return (
      <div className="SearchResults">
        <input type='text' name='userInput' value={this.state.userInput} onChange={this.handleChange}></input>
        <button onClick={this.searchRepos}>Search</button>
        <div>{renderFoundRepos}</div>
      </div>
    )
  }
}

export default SearchResults;
