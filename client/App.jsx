import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TripContextProvider } from './contexts/TripContext';
import Nav from './components/nav';
import Login from './components/loginPage';
import Landing from './components/landingPage';
import Input from './components/inputPage';
import Trip from './components/tripPage';
import './stylesheets/styles.scss'

const App = () => (
  <Router>
    <TripContextProvider>
      <div>
        <Route path="/landing" component={Nav} />
        <Route path="/input" component={Nav} />
        <Route path="/trip" component={Nav} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/input" component={Input} />
          <Route exact path="/trip/:index" component={Trip} />
        </Switch>
      </div>
    </TripContextProvider>
  </Router>
);

export default App;
