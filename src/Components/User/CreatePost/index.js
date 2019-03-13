import React,{Component} from 'react';
import Nav from '../Nav';
import './style.css';

class CreatePost extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      picture: '',
      description: '',
      price: '',
      location: '',
      redirect: true,
    }
  }

  handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const parsedResponse = await fetch('http://localhost:9000/api/v1/posts/create', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedJSON = await parsedResponse.json();

      if(parsedJSON.created != 'post created successful'){
        console.log('post not created')
      }else {
        this.history.push('/profile')
        console.log('your post got created')
      }

      console.log(parsedJSON, ' this is the new post')
    } catch (err) {
      console.log(err, 'error in CreatePost')
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <Nav />

        <form onSubmit={this.handleSubmit} id="post-form">
          <h3>Create Post</h3>
          <input type="text" onChange={this.handleChange} name="title" placeholder="Title of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="picture" placeholder="Picture of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="description" placeholder="Description of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="price" placeholder="Price of item.."/><br/>
          <input type="text" onChange={this.handleChange} name="location" placeholder="Location..."/><br/>
          <button>Post</button>
        </form>
      </div>
    )
  }
}
export default CreatePost;
