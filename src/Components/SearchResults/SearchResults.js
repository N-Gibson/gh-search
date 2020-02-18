import React, { Component } from 'react';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="SearchResults">
        <input type='text' name='userInput' value={this.state.userInput} onChange={this.handleChange}></input>
        <button>Search</button>
      </div>
    )
  }
}

export default SearchResults;
