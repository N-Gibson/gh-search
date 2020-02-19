import React from 'react';
import './Repository.scss';
import { Link } from 'react-router-dom';

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
        <div className="repository">
          <div className="back-button-container">
            <Link to={'/'}>
              <button id="back-button">Back</button>
            </Link>
            <h2 id="title-2">GH-Search</h2>
          </div>
          <div className="repo-content">
            <h2 id="repo-name">{repo.name}</h2>
            <p><span>Owner: </span>{repo.owner.login}</p>
            <p><span>Description: </span>{repo.description}</p>
            <p><span>Language: </span>{repo.language}</p>
            <p><span>Stars: </span>{repo.stargazers_count}</p>
            <a href={repo.html_url}>Visit the repo</a>
          </div>
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
