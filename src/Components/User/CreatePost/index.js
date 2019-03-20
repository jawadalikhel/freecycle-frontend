import React,{Component} from 'react';
import Nav from '../Nav';
import './style.css';

class CreatePost extends Component{
  constructor(){
    super();
    this.state = {
      category: '',

      title: '',
      picture: '',
      description: '',
      eventDate: '',
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

  sale = (e) =>{
    this.setState({
      category: e.target.value
    })
  }
  render(){
    return(
      <div>
        <Nav />

        <form onSubmit={this.handleSubmit} id="post-form">
          <h3>Create Post</h3><br/>

          <input type="button" name="category" onClick={this.sale} value="sale"/>
          <input type="button" name="category" onClick={this.sale} value="wanted"/>
          <input type="button" name="category" onClick={this.sale} value="jobs"/>
          <input type="button" name="category" onClick={this.sale} value="community"/>
          <input type="button" name="category" onClick={this.sale} value="volunteer"/>



          <input type="text" onChange={this.handleChange} name="title" placeholder="Title of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="picture" placeholder="Picture of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="description" placeholder="Description of post.."/><br/>
          <input type="text" onChange={this.handleChange} name="eventDate" placeholder="Event Date.."/><br/>

          <input type="text" onChange={this.handleChange} name="price" placeholder="Price of item.."/><br/>
          <input type="text" onChange={this.handleChange} name="location" placeholder="Location..."/><br/>
          <button>Post</button>
        </form>
      </div>
    )
  }
}
export default CreatePost;




// <select>
//   <option>Select Type of Post</option>
//   <option name="category" value="sale"  onChange={this.handleClick}>For Sale</option>
//   <option name="category" value="wanted" onChange={this.handleClick}>Wanted</option>
//   <option name="category" value="jobs" onChange={this.handleClick}>Jobs</option>
//   <option name="category" value="community" onChange={this.handleClick}>Community</option>
//   <option name="category" value="volunteer" onChange={this.handleClick}>Volunteer</option>
// </select>

// <button onClick={this.sale} value="sale">For Sale</button>
// <button onClick={this.sale} value="wanted">Wanted</button>
// <button onClick={this.sale} value="jobs">Jobs</button>
// <button onClick={this.sale} value="community">Community</button>
// <button onClick={this.sale} value="volunteer">Volunteer</button>
