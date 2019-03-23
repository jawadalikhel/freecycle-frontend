import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class DropDown extends Component{
  constructor(){
    super();
    this.state = {
      displayMenu: false
    };
    this.showDropMenu = this.showDropMenu.bind(this);
    this.hideDeopDownMenu = this.hideDeopDownMenu.bind(this);

  }

  showDropMenu = (e) =>{
    e.preventDefault();
    this.setState({displayMenu: true}, () =>{
      document.addEventListener('click', this.hideDeopDownMenu)
    })
    console.log('clicking')
  }

  hideDeopDownMenu = () =>{
    this.setState({displayMenu: false}, () =>{
      document.removeEventListener('click', this.hideDeopDownMenu);
    });
    console.log('hide menu')
  }
  render(){
    return(
      <div className="dropdown">
        <div className="button" onClick={this.showDropMenu}>Filter</div>

        {
          this.state.displayMenu ? (
            <ul className="menu">
              <li><Link to="/">All Posts</Link></li>
              <li><Link to="/sale">For sale</Link></li>
              <li><Link to="/want">Wanted</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
            </ul>
          ) : null
        }

      </div>
    )
  }
}
export default DropDown;
