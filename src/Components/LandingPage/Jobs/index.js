import React,{Component} from 'react';
import Display from './Display';

class Jobs extends Component{
  constructor(){
    super();
    this.state = {
      jobs: '',
    }
  }

  getData = async (e) =>{
    try {
      const fetchData = await fetch('http://localhost:9000/api/v1/posts/allPost',{
        method: 'GET',
        credentials: 'include',
        headers:{
          'Content-Type': 'application/json'
          }
      })

      const parsedResponse = await fetchData.json();
      console.log(parsedResponse, ' these are all posts data')

      return parsedResponse.data;
    } catch (err) {
      console.log(err.message, 'error in getData Jobs')
    }
  }

  componentDidMount(job){
    this.getData().then((job) =>{
      console.log(job, 'JJJOBS')
      this.setState({
        jobs: job
      })
    })
  }
  render(){
    return(
      <div>
        <Display data={this.state.jobs}/>
      </div>
    )
  }
}
export default Jobs;
