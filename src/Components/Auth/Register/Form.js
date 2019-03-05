import React from 'react';

const Register = (props) =>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handlechange} name="picture" placeholder="your picture" /><br/>
        <input type="text" onChange={props.handlechange} name="about" placeholder="About you..." /><br/>
        <input type="text" onChange={props.handlechange} name="location" placeholder="Your location..." /><br/>
        <input type="text" onChange={props.handlechange} name="email" placeholder="email" /><br/>
        <input type="text" onChange={props.handlechange} name="username" placeholder="username" /><br/>
        <input type="password" onChange={props.handlechange} name="password" placeholder="password" /><br/>
        <button style={{'backgroundColor':'#6a84b7','color':'white'}}>Register</button>
      </form>
    </div>
  )
}


export default Register;
