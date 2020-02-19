import React, { Component } from 'react';
import { searchRepositories } from '../../apiCalls'; 
import './UserInteractions.css';
import SearchResults from '../SearchResults/SearchResults';
import Repositories from '../Repositories/Repositories';
import Repository from '../Repository/Repository';
import { Route } from 'react-router-dom';

class UserInteractions extends Component {
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
    let foundRepositories = this.state.foundRepos.map(repo => <Repositories data={repo} key={repo.id}/>)
    return (
      <div className="user-interactions">
        <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}></input>
        <button onClick={this.searchRepos}>Search</button>
        <div>{foundRepositories}</div>
        <Route exact path="/repository/:id" render={({ match }) => {
          console.log('anytthisndkgfasdgf')
          console.log(match);
          const { id } = match.params;
          let selectedRepo = this.state.foundRepos.find(repo => repo.id === id);
          return <Repository data={selectedRepo} />}
        } />
      </div>
    )
  }
}

export default UserInteractions;
