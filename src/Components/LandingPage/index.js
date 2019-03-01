import React, {Component} from 'react';
import PublicPosts from './PublicPosts';

class LandingPage extends Component{
  render(){
    return(
      <div>
        <nav>
          <a href="/login">Login</a>
          <a href="/register">Register</a>

          <PublicPosts />
        </nav>
      </div>
    )
  }
}

export default LandingPage;
