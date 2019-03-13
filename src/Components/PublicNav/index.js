import React, {Component} from 'react';
import './style.css';

class Nav extends Component{
  render(){
    return(
      <div id="header-container">
        <a href="/" className="header-title" style={{'textDecoration':'none'}}><h1>Freecycle</h1></a>
        <nav className="nav">
          <a href="/login">Login/Register</a>
        </nav>
      </div>
    )
  }
}
export default Nav;
