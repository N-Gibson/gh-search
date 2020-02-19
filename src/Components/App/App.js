import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Repository from '../Repository/Repository';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div className="App">
      <Route exact path='/' render={() => <SearchResults />} />
      <Route exact path='/repository/:id' render={() => <Repository />} /> 
    </div>
    )
  }
}

export default App;
