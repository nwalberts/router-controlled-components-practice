import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UnicornsIndexContainer from '../containers/UnicornsIndexContainer';
import UnicornWelcome from './UnicornWelcome';
import UnicornShowContainer from '../containers/UnicornShowContainer';

const App = (props) => {
  return (
    <div className="text-center">
      <p>Hello Launcher!</p>
      <p>Remove the div displaying this text from your App.js file and uncomment the code we have provided to help get you started on your routes.</p>
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={UnicornWelcome} />
          <Route path="unicorns" component={UnicornsIndexContainer} />
          <Route path="unicorns/:id" component={UnicornShowContainer} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
