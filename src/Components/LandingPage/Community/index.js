import React, {Component} from 'react';
import Display from './Display';
import Nav from '../../PublicNav';
import DropdownMenu from '../DropDownMenu'

class Community extends Component {
  constructor(){
    super();
    this.state = {
      community: [],
    }
  }

  getData = async() =>{
    try {
      const fetchData = await fetch('http://localhost:9000/api/v1/posts/allPost', {
        method: 'GET',
        credentials: 'include',
        headers:{
          'Content-Type': 'application/json'
          }
      })

      const parsedJSON = await fetchData.json();
      console.log(parsedJSON, ' fetch data')
      return parsedJSON.data;
    } catch (err) {
      console.log(err, 'error in getData')
    }
  }

  componentDidMount(){
    this.getData().then((post) =>{
      this.setState({
        community: post
      })
    })
  }
  render(){
    return(
      <div>
        <Nav />
        <DropdownMenu />
        <h1>Community</h1>
        <Display data={this.state.community} />
      </div>
    )
  }
}

export default Community;
