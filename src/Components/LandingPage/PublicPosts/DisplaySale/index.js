import React from 'react';

const Display = (props) =>{
  console.log(props.data, 'THESE ARE THE PROPS')

  const showData = props.data.map((post) =>{
    const priceS = props.price;
    return(
      <div key={post._id}  className="inner-card">
          {(post.category === "sale")
          ?  <div>
              <p>{post.title}</p>
              <p>{post.description}</p>
            </div>
          : null}

      </div>
    )
  })
  return(
    <div id="flex-container">
      {showData}
    </div>
  )
}

export default Display;
