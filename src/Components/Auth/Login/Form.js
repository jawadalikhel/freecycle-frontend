import React from 'react';

const Login = (props) =>{
  return(
    <div>
      <form onSubmit={props.getUser}>
        <input type="text" onChange={props.handleChange} name='username' placeholder="username" /><br/>
        <input type="password" onChange={props.handleChange} name='password' placeholder="password" /><br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
