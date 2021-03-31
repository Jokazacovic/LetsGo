import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import Nav from './components/nav';
import Login from './components/loginPage';
import Landing from './components/landingPage';
import Input from './components/inputPage';
import Trip from './components/tripPage';

const App = () => (
  <Router>
    <UserContextProvider>
      <div>
        <Route path="/landing" component={Nav} />
        <Route path="/input" component={Nav} />
        <Route path="/trip" component={Nav} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/input" component={Input} />
          <Route exact path="/trip" component={Trip} />
        </Switch>
      </div>
    </UserContextProvider>
  </Router>
);

export default App;
