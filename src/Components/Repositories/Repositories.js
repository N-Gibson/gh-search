import React from 'react';
import './Repositories.css';
import { Link } from 'react-router-dom';
import Repository from '../Repository/Repository';

const Result = (props) => {
  const { name, language, description, id } = props.data;

  return (
    <Link to={`/repository/${id}`} className="Result">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{language}</p>
      <Repository props={props}/>
    </Link>
  )
}

export default Result;
