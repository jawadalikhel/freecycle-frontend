import React, {Component} from 'react';

class DropDown extends Component{
  constructor(props){
    super();
    this.state = {
      displayMenu: false,
    };

  }

  showDropDownMenu = (e) =>{
    e.preventDefault();
    this.setState({
      displayMenu: true,
      () =>{
        document.addEventListener('click', this.hideDropDownMenu);
      }
    })
  }

  hideDropDownMenu = () =>{
    this.setState({
      displayMenu: false,
      () =>{
        document.removeEventListener('click', this.hideDropDownMenu);
      }
    })
  }
  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state;
    return(
      <div className="dd-wrapper">

      </div>
    )
  }
}
export default DropDown;
