import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import LandingPage from './Components/LandingPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Route exact path="/" component={} />
