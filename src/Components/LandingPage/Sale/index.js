import React, {Component} from 'react';
import Display from './Display';
import Nav from '../../PublicNav';
import DropdownMenu from '../DropDownMenu'

class Sale extends Component{
  constructor(){
    super();
    this.state = {
      sale: [],
    }
  }

  salePosts = async() =>{
    try {
      const fetchSale = await fetch ('http://localhost:9000/api/v1/posts/allPost',{
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedJSON = await fetchSale.json();
      console.log(parsedJSON.data, '<--- sale posts parsedJSON')
      return parsedJSON.data;
    } catch (err) {
      console.log(err, 'errror in salePosts')
    }
  }

  componentDidMount(){
    this.salePosts().then((post) =>{
      console.log(post, 'sale posts')
      this.setState({
        sale: post,
      })
    })
  }
  render(){
    return(
      <div>
        <Nav />
        <DropdownMenu />
        <h1>For Sale</h1>
        <Display data={this.state.sale} />
      </div>
    )
  }
}

export default Sale;
