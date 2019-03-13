import React, {Component} from 'react';
import Form from './Form';
import Nav from '../../PublicNav';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  getUser = async(e) =>{
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers:{
          'Content-Type': 'application/json'
          }
      });

      const parsedResponse = await response.json();
      console.log(parsedResponse, ' this is parsedResponse')

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/profile');
      }else if(parsedResponse.data === 'password wrong'){
        alert('Password Incorrect')
      }else if(parsedResponse.data === 'username not found'){
        alert('Username Not Found')
      }

    } catch (err) {
      console.log(err.message, '<--- error in getUser Login');
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <Nav />
        <Form getUser={this.getUser} handleChange={this.handleChange}/>
      </div>
    )
  }
}
export default Login;
