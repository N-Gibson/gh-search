import React from 'react';
import './Repository.css';

const Repository = (props) => {
  const { id, repos } = props;
  const repo = repos.find(repo => repo.id === parseInt(id));

  return (
    <div className="Repository">
      <h2>{repo.name}</h2>
    </div>
  )
}

export default Repository;
