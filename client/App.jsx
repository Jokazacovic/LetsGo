/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/loginPage.jsx';
import Landing from './components/landingPage.jsx';
import Input from './components/inputPage.jsx';
import Trip from './components/tripPage.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/landi ng" component={Landing} />
            <Route path="/input" component={Input} />
            <Route path="/trip" component={Trip} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
