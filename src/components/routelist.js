import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './route';
import Header from './header'


export default class IndexRoutes extends Component {

  constructor(props) {
      super(props);
      this.state = {routes: []}; 
    }
    componentDidMount(){
      axios.get('/getroute')
        .then(response => {
          console.log("Routes List: ", response.data);
          this.setState({ routes: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }       
    tabRow(){
      return this.state.routes.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    

    render() {
      return (
        
        <div>
          <Header/>
          <h3 align="center">Route List</h3>
           
          <Link to={"/addRoute"} className="btn btn-primary btn-lg m-4">Add Route</Link>      
          <table className="table table-striped" style={{ marginTop: 1 }}>
            <thead>
              <tr>
                
                <th>Route Name</th>
                <th> Bus Route Number </th>
                <th> Bus Number </th>
                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
          
        </div>
        
        
      );
    }
  }