import React from 'react';
import Form from './Form';

class Register extends React.Component{
  state = {
    email: '',
    username: '',
    password: '',
  }

  handleSubmit = async (e) =>{
    try {
      e.preventDefault();

      const registerFetch = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await registerFetch.json();
      console.log(parsedResponse, ' this is register response');

      if(parsedResponse.data === 'register successful'){
        this.props.history.push('/')
      }else{
        alert('register error');
      }
    } catch (err) {
      console.log(err, 'error in registerUser')
    }
  }

  handlechange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <nav>
          <a href="/">Home</a>
        </nav>

        <h1>Register</h1>
        <Form handleSubmit={this.handleSubmit} handlechange={this.handlechange}/>

      </div>
    )
  }
}
export default Register;
