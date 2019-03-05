import React, {Component} from 'react';
import PublicPosts from './PublicPosts';
import './home.css';

class LandingPage extends Component{
  render(){
    return(
      <div id="LandingPage">
        <div className="header">
          <h1 className="header-title">Freecycle</h1>
          <nav>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </nav>
        </div>

        <div className="PublicPosts">
          <PublicPosts />
        </div>
      </div>
    )
  }
}

export default LandingPage;
