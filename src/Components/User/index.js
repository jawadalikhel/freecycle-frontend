import React, {Component} from 'react';
import DisplayPosts from './DisplayPosts';
import Nav from './Nav';
import './style.css';
// import DisplayPublicPosts from '../LandingPage/PublicPosts/Display'

class User extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  userPosts = async(e) =>{
    try {
      const getPosts = await fetch('http://localhost:9000/api/v1/posts/userPost',{
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await getPosts.json();
      console.log(parsedResponse, ' these are the current user posts');

      return parsedResponse;
    } catch (err) {
      console.log(err, ' error in getPosts')
    }
  }

  componentDidMount(){
    this.userPosts().then((post) =>{
      console.log(post, ' THESE ARE YOUR POSTS')
      this.setState({
        posts: post.data
      })
    })
  }

  deleteHandler = async(id, e) =>{
    try {
      e.preventDefault();

      const deleteResponse = await fetch('http://localhost:9000/api/v1/posts/' + id, {
        method: 'DELETE'
      })

      const JsonParsed = await deleteResponse.text();
      console.log(JsonParsed, ' this is the delete post JsonParsed')

      this.setState({
        posts: this.state.posts.filter((onePost) => onePost._id !== id)
      })
    } catch (err) {
      console.log(err, 'error in deleteHandler')
    }
  }


  render(){
    console.log(this.state, ' THIS IS THE STATE IN user profile')
    return(
      <div id="Profile-container">

        <div id="pnav">
          <Nav />
        </div>

        <div id="in-nav">
          <a href="/profile">Your Posts</a>
          <a href="/gposts" >Public Posts</a>
        </div>

        <div id="privatePosts-container">
          <DisplayPosts userPosts={this.state.posts} deletePost={this.deleteHandler}/>
        </div>

      </div>
    )
  }
}
export default User;
