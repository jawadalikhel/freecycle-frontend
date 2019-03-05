import React, {Component} from 'react';

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
      console.log(err, 'error in getProfile')
    }
  }

  componentDidMount(){
    this.getProfile()
    .then((profile) =>{
      this.setState({profile: profile})
      console.log(profile, ' this is the profile')
    }).catch((err) =>{
      console.log(err, 'error in componentDidMount getProfile')
    })
  }
  render(){
    console.log(this.state, 'THIS IS THE STATE')
    return(
      <div>
        <div className="header">
          <h1 className="header-title">Freecycle</h1>
          <nav>
            <a href="/">Logout</a>
            <a href="/createpost">New Post</a>
            <a href="#">Settings</a>
            <a href="/profile">Home</a>
          </nav>
        </div>

        <h1>Profile Seetings</h1>
      </div>
    )
  }
}
export default Setting;
