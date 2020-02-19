import React from 'react';
import UserInteractions from '../UserInteractions/UserInteractions';
import { Route } from 'react-router-dom';
import './App.css';
import Repository from '../Repository/Repository';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <UserInteractions />} />
      <Route path="/repository/:id" render={() => <Repository />} />
    </div>
  )
}

export default App;
