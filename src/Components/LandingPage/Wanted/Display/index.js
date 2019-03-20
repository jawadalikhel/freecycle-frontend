import React from 'react';

const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    return(
      <div key={post._id} >
          {(post.category === "wanted")
          ?  <div style={{'border': '2px solid blue'}}>

              <p>{post.title}</p>
              <p>${post.price}</p>
              <p>{post.description}</p>
              <p>{post.location}</p>
              <p>{post.createdAt}</p>
            </div>
          : null}

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
