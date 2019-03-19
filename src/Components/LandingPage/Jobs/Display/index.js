import React from 'react';

const Display = (props) =>{
  console.log(props.data, 'JOOBS')
  const showJobs = props.data.map((i) =>{
    console.log(i, 'III')
  })
  return(
    <div>
      hi
    </div>
  )
}

export default Display;
