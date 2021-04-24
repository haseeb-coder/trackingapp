import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './Bus';
import Header from './header'


export default class IndexBuses extends Component {

  constructor(props) {
      super(props);
      this.state = {buses: []}; 
    }
    componentDidMount(){
      axios.get('/getBus')
        .then(response => {
          console.log("Bus List: ", response.data);
          this.setState({ buses: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }       
    tabRow(){
      return this.state.buses.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    

    render() {
      return (
        
        <div>
          <Header/>
          <h3 align="center">Buses Information</h3>
           
          <Link to={"/addBuses"} className="btn btn-primary btn-lg m-4">Add Buses</Link>      
          <table className="table table-striped" style={{ marginTop: 1 }}>
            <thead>
              <tr>
                <th>Bus Number</th>
                <th>Bus RouteNumber</th>
                <th>Bus Type</th>
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