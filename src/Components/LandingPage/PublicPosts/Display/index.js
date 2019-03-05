import React from 'react';
import './display.css';

const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    return(
      <div className="card">
        <div key={post._id} className="inner-card" style={{'padding':'1em'}}>
          <h3>Title: {post.title}</h3>
          <img src={post.picture} style={{'width':'40%'}}/>
          <p>Description: {post.description}</p>
          <p>Location: {post.location}</p>
          <p>Created By: {post.createdBy}</p>
        </div>
      </div>
    )
  })
  return(
    <div id="Posts-container">
      {showData}
    </div>
  )
}

export default Display;
