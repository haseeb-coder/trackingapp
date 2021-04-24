import React, {Component} from 'react';
import Header from './header'
import Map from './activeMap'
import axios from 'axios'


class Home extends Component {  
  constructor(props){
    super(props);
    this.state = {
      tripsAll:[], 
    }
  }  

  
  componentDidMount(){
    axios.get('/getActiveTrips')
    .then(response => {
      this.setState({ tripsAll: response.data });
      //console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    }) 
   }
  render() { 
    return (
      <div>      
      <Header />
      <Map tripPass = {this.state.tripsAll} zoom = {11} />
      
      </div>          
    );
  }
}

export default Home;
