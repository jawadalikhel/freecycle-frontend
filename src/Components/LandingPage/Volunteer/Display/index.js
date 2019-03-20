import React from 'react';

const Display = (props) =>{
  console.log(props.data, ' the props')
  const showJobs = props.data.map((post) =>{
    return(
      <div key={post._id}>
        {(post.category === 'Volunteer') ?
        <div>
          <img src={post.picture} className="postImg"/>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.location}</p>
          <p>{post.date}</p>
        </div>
        : null}
      </div>
    )
  })
  return(
    <div>
      {showJobs}
    </div>
  )
}
export default Display;
