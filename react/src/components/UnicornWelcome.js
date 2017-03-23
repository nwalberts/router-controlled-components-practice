import React from 'react';
import { browserHistory, Link } from 'react-router';
import BackButton from './BackButton.js';

const UnicornWelcome = (props) => {

 return(
   <div className="small-12 small-centered columns main-body">
    <h1>Welcome to My Pretty Unicorn Collector</h1>
    <h4>The best resource for collecting pretty unicorns*</h4>
    <p>
      unless you go to Daves magical unicorn palace...I GUESS
    </p>
    <img src="https://thecreme.files.wordpress.com/2008/06/unicorns-rainbow.jpg"/>

    <h6><Link to={`/unicorns`}> My Pretty Unicorn Collection </Link></h6>
   </div>
 )
}

export default UnicornWelcome;
