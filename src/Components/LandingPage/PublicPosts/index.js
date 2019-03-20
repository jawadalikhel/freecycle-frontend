import React, {Component} from 'react';
import Display from './Display';
import './style.css';

class Posts extends Component{
  constructor(){
    super();
    this.state = {
      posts: [],
      sale: []
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
      return parsedJSON;
    } catch (err) {
      console.log(err, 'error in getPosts')
    }
  }

  componentDidMount(){
    this.getPosts().then((data) =>{
      console.log(data[19].categorie, 'data.categorie');
        this.setState({
          posts: data.data,
        })
      })
  }

  render(){
    this.state.posts.map((item) =>{
      console.log(item.sale,'item.sale')
    })
    return(
      <div id="display-container">
        <Display data={this.state.posts} />
      </div>
    )
  }
}

export default Posts;
