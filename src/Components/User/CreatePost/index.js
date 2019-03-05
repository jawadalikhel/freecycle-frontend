import React,{Component} from 'react';

class CreatePost extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      picture: '',
      description: '',
      location: ''
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
        <div className="header">
          <h1 className="header-title">Freecycle</h1>
          <nav>
            <a href="/">Logout</a>
            <a href="/createpost">New Post</a>
            <a href="#">Settings</a>
            <a href="/profile">Home</a>
          </nav>
        </div>

        <form onSubmit={this.handleSubmit}>
          <h3>Create Post</h3>
          <input type="text" onChange={this.handleChange} name="title" placeholder="Title of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="picture" placeholder="Picture of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="description" placeholder="Description of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="location" placeholder="Location..."/><br/>
          <button>Post</button>
        </form>
      </div>
    )
  }
}
export default CreatePost;
