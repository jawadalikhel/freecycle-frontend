import React, {Component} from 'react';
import DisplayPosts from './DisplayPosts';
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
  render(){
    console.log(this.state, ' THIS IS THE STATE IN user profile')
    return(
      <div>
        <div className="header">
          <h1 className="header-title">Freecycle</h1>
          <nav>
            <a href="/">Logout</a>
            <a href="/createpost">New Post</a>
            <a href="/profile">Home</a>
            <a href="/setting">Setting</a>
          </nav>
        </div>
        <DisplayPosts userPosts={this.state.posts} />
      </div>
    )
  }
}
export default User;
