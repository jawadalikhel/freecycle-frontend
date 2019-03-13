import React from 'react';
import './form.css';

const Login = (props) =>{
  return(
    <div id="form-div">
      <h1>Login</h1>
      <form onSubmit={props.getUser} id="form">
        <input type="text" onChange={props.handleChange} name='username' placeholder="username" /><br/>
        <input type="password" onChange={props.handleChange} name='password' placeholder="password" /><br/>
        <button style={{'backgroundColor':'#6a84b7','color':'white'}} className="login-btn">Login</button>
        <a href="/register" className="a">Register</a>
      </form>
    </div>
  )
}

export default Login;
