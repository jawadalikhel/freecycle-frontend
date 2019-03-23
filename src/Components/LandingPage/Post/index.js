import React, {Component} from 'react';
import Nav from '../../PublicNav';

class Post extends Component{
  constructor(){
    super();
    this.state = {
      post: null
    }
  }

  getPost = async() =>{
    const id = this.props.match.params.id;
    console.log(id, 'ID')
    const fetchData = await fetch('http://localhost:9000/api/v1/posts/' + id,{
      method: 'GET',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
        }
    })

    const parsedJSON = await fetchData.json();
    return parsedJSON.data;
    console.log(parsedJSON, 'POST DATA')
  }

  componentDidMount(){
    this.getPost().then((data) =>{
      console.log(data, 'DATA')
      this.setState({
        post: data,
      })
    })
  }
  render(){
    const showPost = this.state.post ? (
      <div>
        <img src={this.state.post.picture} style={{"width":"50%"}}/>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.description}</p>
      </div>
    ) : (
      <h1>Loading post ingo</h1>
    )
    return(
      <div>
        <div id="header-container">
          <a href="/" className="header-title" style={{'textDecoration':'none'}}><h1>Freecycle</h1></a>
          <nav className="nav">
            <a href="/">Login/Home</a>
            <a href="/login">Login/Register</a>
          </nav>
        </div>
        {showPost}
      </div>
    )
  }
}
export default Post;
