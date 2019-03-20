import React, {Component} from 'react';
import Display from './Display';
import Nav from '../../PublicNav';
import DropdownMenu from '../DropDownMenu'

class Wanted extends Component{
  constructor(){
    super();
    this.state = {
      want: [],
    }
  }

  WantedPosts = async() =>{
    try {
      const fetchData = await fetch ('http://localhost:9000/api/v1/posts/allPost',{
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedJSON = await fetchData.json();
      console.log(parsedJSON.data, '<--- Wanted posts parsedJSON')
      return parsedJSON.data;
    } catch (err) {
      console.log(err, 'errror in WantedPosts')
    }
  }

  componentDidMount(){
    this.WantedPosts().then((post) =>{
      console.log(post, 'Wanted posts')
      this.setState({
        want: post,
      })
    })
  }
  render(){
    return(
      <div>
        <Nav />
        <DropdownMenu />
        
        <h1>Wanted</h1>
        <Display data={this.state.want} />
      </div>
    )
  }
}

export default Wanted;
