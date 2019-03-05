import React, {Component} from 'react';
import './display.css';

const Display = (props) =>{
  console.log(props.userPosts, 'PORPS')

  const showPosts = props.userPosts.map((post) =>{
    return(
      <div>
        <div key={post._id} className="dcard" style={{'padding':'1em'}}>
          <h1>{post.create}</h1>
          <h1>{post.title}</h1>
          <img src={post.picture}  style={{'width':'50%', 'marginLeft':'2em'}}/>
          <p>{post.description}</p>
        </div>
      </div>
    )
  })
  return(
    <div id="Post-constainer">
      {showPosts}
    </div>
  )
}
export default Display;
