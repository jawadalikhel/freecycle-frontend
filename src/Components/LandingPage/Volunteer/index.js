import React, {Component} from 'react';
import Nav from '../../PublicNav';
import DropdownMenu from '../DropDownMenu'
import Display from './Display';

class Volunteer extends Component{
  constructor(){
    super();
    this.state = {
      volunteer: [],
    }
  }

  getData = async() =>{
    try {
      const fetchData = await fetch ('http://localhost:9000/api/v1/posts/allPost', {
        method: 'GET',
        credentials: 'include',
        header: {
          'Content-Type': 'application/json'
        }
      })

      const parsedJSON = await fetchData.json();
      console.log(parsedJSON, ' the fetch data')
      return parsedJSON.data;
    } catch (err) {
      console.log(err, 'error in getData Jobs')
    }
  }

  componentDidMount(){
    this.getData().then((post) =>{
      this.setState({
        volunteer: post
      })
    })
  }
  render(){
    return(
      <div>
        <Nav />
        <DropdownMenu />
        <h1>Volunteer</h1>
        <Display data={this.state.volunteer} />
      </div>
    )
  }
}
export default Volunteer;
