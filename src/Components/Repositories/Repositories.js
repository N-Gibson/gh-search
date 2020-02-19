import React from 'react';
import './Repositories.scss';
import { Link } from 'react-router-dom';

const Result = (props) => {
  const { name, language, description, id } = props.data;

  return (
    <Link to={`/repository/${id}`} id="link-to-repo">
      <div className="result">
        <h2 id="repository-name" className="repository-text">{name}</h2>
        <p className="repository-text"><span>Description: </span>{description}</p>
        <p className="repository-text"><span>Language: </span>{language}</p>
      </div>
    </Link>
  )
}

export default Result;
