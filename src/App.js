import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';


// auth routes
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';

// Dropdown menu routes
import Sale from './Components/LandingPage/Sale';
import Wanted from './Components/LandingPage/Wanted';
import Community from './Components/LandingPage/Community';
import Jobs from './Components/LandingPage/Jobs';
import Volunteer from './Components/LandingPage/Volunteer';

// landingpage routes
import LandingPage from './Components/LandingPage';
import PublicPost from './Components/LandingPage/PublicPosts/Display';
import Post from './Components/LandingPage/Post';

// user routes after login
import userPosts from './Components/User/DisplayPosts';
import CreatePost from './Components/User/CreatePost';
import Profile from './Components/User';
import Setting from './Components/User/Profile/Setting';
import GlobalPost from './Components/User/PublicPosts';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(() => [], {}, applyMiddleware());


/////// Switch tags directs the routes to the exact we are giving in the <Route>
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
            <Route  path="/:id" component={Post} />


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
