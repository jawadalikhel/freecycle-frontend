import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import LandingPage from './Components/LandingPage';
import PublicPost from './Components/LandingPage/PublicPosts/Display';

import userPosts from './Components/User/DisplayPosts';
import CreatePost from './Components/User/CreatePost';
import Profile from './Components/User';
import Setting from './Components/User/Profile/Setting';
import GlobalPost from './Components/User/PublicPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />

          <Route  path="/profile" component={Profile} />
          <Route  path="/setting" component={Setting} />
          <Route  path="/gposts" component={GlobalPost} />


          <Route  path="/userposts" component={userPosts} />
          <Route  path="/createpost" component={CreatePost} />
          <Route  path="/publicpost" component={PublicPost} />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Route exact path="/" component={} />
