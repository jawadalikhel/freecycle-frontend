import React from 'react';
import './display.css';

const Display = (props) =>{
  console.log(props.profile, 'PROPS')

  return(
    <div id="profile-container">
      <img src={props.profile.picture} className="profile-img"/>
      <p>{props.profile.username}</p>
      <p>About Me: {props.profile.about}</p>
      <p>{props.profile.email}</p>
      <p>{props.profile.location}</p>
      <button style={{'width':'50%','marginLeft':'-52em','marginTop':'10em','height':'3em'}}>Edit Profile</button>
    </div>
  )
}

export default Display;
