import React from 'react';
import './display.css';
import DropDownMenu from '../../../LandingPage/DropDownMenu';


const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    return(
      <div key={post._id}  className="pinner-card">
        {(post.price) ? <p>${post.price}</p> : null}
        <img src={post.picture} className="pImg"/>
        <h3>Title: {post.title} ({post.location})</h3>
        <p>Description: {post.description}</p>
        <p>Posted By: {post.createdBy}</p>
        <p>Date: {post.createdAt}</p>
      </div>
    )
  })
  return(
    <div id="Posts-container">
      <DropDownMenu />
      {showData}
    </div>
  )
}

export default Display;
