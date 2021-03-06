import React from 'react';
import './display.css';

const Display = (props) =>{
  console.log(props.userPosts, 'PORPS')

  const showPosts = props.userPosts.map((post) =>{
    return(
      <div key={post._id}  className="pinner-card">
        {(post.price) ? <p>${post.price}</p> : null}
        <img src={post.picture} className="pImg"/>
        <h3>Title: {post.title}({post.location})</h3>
        <p>Description: {post.description}</p>
        <p>Date: {post.createdAt}</p>
        <button>Edit Post</button>
        <button onClick={props.deletePost.bind(null, post._id)}>Delete Post</button>
      </div>
    )
  })
  return(
    <div id="privatePosts-container">
      {showPosts}
    </div>
  )
}
export default Display;
