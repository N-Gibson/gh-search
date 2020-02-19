import React from 'react';
import './Result.css';

const Result = (props) => {
  const { name, url, language, description } = props.data;

  return (
    <div className="Result">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}/>
      <p>{language}</p>
    </div>
  )
}

export default Result;
