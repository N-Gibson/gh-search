import React, { Component } from 'react';
import { searchRepositories } from '../../apiCalls'; 
import Repositories from '../Repositories/Repositories';
import './UserInteractions.css';
import { connect } from 'react-redux';
import { getRepos } from '../../Actions/index';

class UserInteractions extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      foundRepos: [],
      languageInput: '',
      welcomeMessage: true,
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchRepos = async () => {
    this.setState({ welcomeMessage: false });

    if(this.state.userInput) {
      const repositories = await searchRepositories(this.state.userInput);
      const repoItems = repositories.items
      this.props.getRepos({ repoItems });
      this.setState({ foundRepos: repoItems });
    }
  }

  filterByLanguage = () => {
    const languageFilter = this.state.foundRepos.filter(repo => repo.language === this.state.languageInput);
    this.setState({ foundRepos: languageFilter });
  }

  sortByStars = (order) => {
    let starSort;

    if(order === 'most') {
      starSort = this.state.foundRepos.sort((a, b) => {
        return a.stargazers_count - b.stargazers_count;
      });
      this.setState({ foundRepos: starSort });
    } else {
      starSort = this.state.foundRepos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
      this.setState({ foundRepos: starSort });
    }
  }

  render() {
    let foundRepositories = this.state.foundRepos.map(repo => <Repositories data={repo} key={repo.id}/>)

    return (
      <div className="user-interactions">
        <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}></input>
        <button onClick={this.searchRepos}>Search</button>
        <input type="text" name="languageInput" value={this.state.languageInput} onChange={this.handleChange}></input>
        <button onClick={this.filterByLanguage}>Search Language</button>
        <button onClick={() => this.sortByStars('most')}>Most Stars</button>
        <button onClick={() => this.sortByStars('least')}>Least Stars</button>
        <div>{foundRepositories}</div>
        {this.state.welcomeMessage && <p>Please search for some repositories!</p>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getRepos: repos => dispatch(getRepos(repos)),
});

export default connect(null, mapDispatchToProps)(UserInteractions);
