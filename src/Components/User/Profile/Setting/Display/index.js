import React from 'react';
import './display.css';

const Display = (props) =>{
  console.log(props.profile, 'PROPS')

  return(
    <div id="profile-container">
      <img src={props.profile.picture} />
      <p>{props.profile.username}</p>
      <p>About: {props.profile.about}</p>
      <p>Email: {props.profile.email}</p>
      <p>Location: {props.profile.location}</p>
    </div>
  )
}

export default Display;
