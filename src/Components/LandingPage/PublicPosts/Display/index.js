import React from 'react';

const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    return(
      <div key={post._id}>
        <h1>Title: {post.title}</h1>
        <img src={post.picture} />
        <p>Description: {post.description}</p>
        <p>Location: {post.location}</p>
        <p>Created By: {post.createdBy}</p>
      </div>
    )
  })
  return(
    <div>
      {showData}
    </div>
  )
}

export default Display;
