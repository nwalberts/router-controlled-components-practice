import React from 'react';
import { Link } from 'react-router';

const UnicornElement = (props) => {
  let id = props.id
  let title = props.name
  let body = props.description
  let img = props.img
  return(
    <div className="article-tile callout">
      <h1><Link to={`/articles/${id}`}> {title} </Link></h1>
      <h4>{body}</h4>
      <img src={img}/>
    </div>
  )
}

export default UnicornElement;
