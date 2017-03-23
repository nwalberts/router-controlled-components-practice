import React from 'react';
import { browserHistory, Link } from 'react-router';
import BackButton from './BackButton.js';

const UnicornShow = ({ id, title, body, img }) => {
  return(
    <div className="unicorn-show">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={"/"}>My Pretty Pony Collection</Link>

        <img className="row" src={img}/>

        <div className="button">
          <BackButton />
        </div>
      </div>

    </div>
  )
}

export default UnicornShow;
