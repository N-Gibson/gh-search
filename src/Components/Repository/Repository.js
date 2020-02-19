import React from 'react';
import './Repository.scss';

const Repository = (props) => {
  const { id, repos } = props;
  let repo;
  if(repos) {
    repo = repos.find(repo => repo.id === parseInt(id));
  }

  return (
    <div>
      {
        repos &&
        <div className="Repository">
          <h2>{repo.name}</h2>
          <p>Owner: {repo.owner.login}</p>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Stars: {repo.stargazers_count}</p>
        </div>
      }
      {
        !repos &&
        <p>Please go back and select a repository</p>
      }
  </div>
  )
}

export default Repository;
