import React, { Component } from 'react';
import UserInteractions from '../UserInteractions/UserInteractions';
import { Route } from 'react-router-dom';
import './App.css';
import Repository from '../Repository/Repository';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <UserInteractions />} />
      <Route path="/repository/:id" render={({ match }) => <Repository id={match.params.id} repos={props.repos.repoItems}/>} />
    </div>
  )
}

const mapStateToProps = ({ repos }) => ({
  repos
});

export default connect(mapStateToProps)(App);
