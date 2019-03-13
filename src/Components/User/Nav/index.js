import React, {Component} from 'react';
import './style.css';

class Nav extends Component{
  render(){
    return(
      <div id="pheader-container">
        <a href="/profile" className="pheader-title" style={{'textDecoration':'none'}}><h1>Freecycle</h1></a>

        <nav className="pnav">
          <a href="/profile">Home</a>
          <a href="/createpost">New Post</a>
          <a href="/setting">Setting</a>
          <a href="/">Logout</a>
        </nav>

      </div>
    )
  }
}
export default Nav;
