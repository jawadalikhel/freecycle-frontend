import React from 'react';

const Register = (props) =>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handlechange} name="email" placeholder="email" /><br/>
        <input type="text" onChange={props.handlechange} name="username" placeholder="username" /><br/>
        <input type="password" onChange={props.handlechange} name="password" placeholder="password" /><br/>
        <button>Register</button>
      </form>
    </div>
  )
}


export default Register;
