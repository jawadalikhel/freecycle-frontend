import React, {Component} from 'react';
import Display from './Display';
import Nav from '../../Nav';


class Setting extends Component{
  constructor(){
    super();
    this.state = {
      profile: []
    }
  }

  getProfile = async(id) =>{
    try {
      const fetchData = await fetch('http://localhost:9000/auth//profile', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedJSON = await fetchData.json();
      return parsedJSON;

      console.log(parsedJSON, ' this is the data of profile')
    } catch (err) {
      console.log(err.message, 'error in getProfile')
    }
  }

  componentDidMount(){
    this.getProfile()
    .then((pro) =>{
      this.setState({profile: pro.data})
      console.log(pro.data, ' this is the profile')
    }).catch((err) =>{
      console.log(err.message, 'error in componentDidMount getProfile')
    })
  }
  render(){
    console.log(this.state.profile, '<--- THIS IS THE STATE')
    return(
      <div>
        <Nav />
        <div style={{'marginTop':'5em'}}><Display profile={this.state.profile}/></div>
      </div>
    )
  }
}
export default Setting;
