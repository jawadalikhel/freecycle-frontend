import React, {Component} from 'react';
import PublicPosts from './PublicPosts';
import Nav from '../PublicNav';
import DropDown from './DropDownMenu';

class LandingPage extends Component{
  render(){
    return(
      <div id="LandingPage">

        <Nav />

        <DropDown />

        <div id="PublicPosts-container">
          <PublicPosts />
        </div>

        <footer  id="footer-container">
          <p>Developed by: Jawad Alikhel</p>
        </footer>

      </div>
    )
  }
}

export default LandingPage;
