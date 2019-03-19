import React, {Component} from 'react';
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
              <li><a href="#">For sale</a></li>
              <li><a href="#">Wanted</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Voluntary</a></li>
            </ul>
          ) : null
        }

      </div>
    )
  }
}
export default DropDown;
