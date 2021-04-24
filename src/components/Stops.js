import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'                
// eslint-disable-next-line
import ReactDOM from 'react-dom'

import axios from 'axios';


class TableRowstops extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
       height : 20, displayValue:true,
    };
  }
  delete() {
    console.log("About to delete a Student");
    axios.get('/api/stops/deleteStops/'+this.props.obj.id)
        // .then(window.location.replace('/indexStudent'))
        .then(window.location.href = '/header')
        .catch(err => console.log(err))
  }

  render() {
    console.log(this.props.obj)
    return (
      <Router>
      <tr>     
          <td>{this.props.obj.stopname}</td>
          <td>{this.props.obj.busRouteNumber}</td>
          <td>{this.props.obj.longitude}</td>
          <td>{this.props.obj.latitude}</td>
          <td><button onClick = {this.delete} className="btn btn-danger">Delete</button></td>
        </tr>
        
      </Router>  
    );
  }
}

export default TableRowstops;