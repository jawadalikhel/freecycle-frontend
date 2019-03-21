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

import Sale from './Components/LandingPage/Sale';
import Wanted from './Components/LandingPage/Wanted';
import Community from './Components/LandingPage/Community';
import Jobs from './Components/LandingPage/Jobs';
import Volunteer from './Components/LandingPage/Volunteer';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(() => [], {}, applyMiddleware());



class App extends Component {
  render() {
    return (
      <Provider store={store}>
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

            <Route path="/sale" component={Sale} />
            <Route path="/want" component={Wanted} />
            <Route path="/community" component={Community} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/volunteer" component={Volunteer} />

          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;

// <Route exact path="/" component={} />
