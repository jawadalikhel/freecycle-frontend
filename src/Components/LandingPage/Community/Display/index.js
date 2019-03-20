import React from 'react';

const Display = (props) =>{

  console.log(props.data, ' the data in display ')
  const showPost = props.data.map((post) =>{
    return(
      <div key={post._id}>
        {(post.category === "community")?
        <div>
          <img src={post.picture} />
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.location}</p>
          <p>Event Date: {post.Eventdata}</p>

        </div>
        : null}
      </div>
    )
  })
  return(
    <div>
      {showPost}
    </div>
  )
}
export default Display;
