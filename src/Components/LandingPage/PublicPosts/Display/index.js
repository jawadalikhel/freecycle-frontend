import React from 'react';
import './display.css';
import {Link} from 'react-router-dom';

const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    const priceS = props.price;
    return(
      <Link to={"/" + post._id}>
        <div key={post._id}  className="inner-card">
            {(post.price) ? <p>${post.price}</p> : null}
            <img src={post.picture} className="postImg"/>
            <div className="post-info">
              <h4>{post.title}({post.location})</h4>
              <p>{post.description}</p>
              <p>Posted By: {post.createdBy}</p>
              <p>Date: {post.createdAt}</p>
            </div>
        </div>
      </Link>
    )
  })
  return(
    <div id="flex-container">
      {showData}
    </div>
  )
}

export default Display;
