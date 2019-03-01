import React, {Component} from 'react';
import Display from './Display';

class Posts extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  getPosts = async () =>{
    try {
      const postResponse = await fetch('http://localhost:9000/api/v1/posts/allPost', {
        method: 'GET',
        credentials: 'include',
        headers:{
          'Content-Type': 'application/json'
          }
      })

      const parsedJSON = await postResponse.json();
      // console.log(parsedJSON.data, ' these are all the posts')

      return parsedJSON.data;
    } catch (err) {
      console.log(err, 'error in getPosts')
    }
  }

  componentDidMount(){
    this.getPosts().then((data) =>{
        this.setState({
          posts: data
        })
      })
  }

  render(){
    // console.log(this.state.posts,'POSTS')
    return(
      <div>
        <Display data={this.state.posts} />
      </div>
    )
  }
}

export default Posts;
