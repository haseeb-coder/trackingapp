import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './Stops';
import Header from './header'


export default class IndexStops extends Component {

  constructor(props) {
      super(props);
      this.state = {stops: []}; 
    }
    componentDidMount(){
      axios.get('/getstops')
        .then(response => {
          //console.log("faculty  List: ", response.data);
          this.setState({ stops: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    } 

    tabRow(){
      //console.log("sending to body", this.state.stops)
      return this.state.stops.map(function(object, i){  //////
          return <TableRow obj={object} key={i} />;
      });
    }

    

    render() {
      console.log('IN RENDER STOP Page', this.state.stops)
      return (
        
        <div>
          <Header/>
          <h3 align="center">Stops List</h3>
           
          <Link to={"/addStops"} className="btn btn-primary btn-lg m-4">Add Stops</Link>      
          <table className="table table-striped" style={{ marginTop: 1 }}>
            <thead>
              <tr>
                
                <th>Stop Name</th>
                <th> Bus Route Number </th>
                <th>Latitude</th>
                <th>Longitude</th>

                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() 
              }
            </tbody>
          </table>
          
        </div>
        
        
      );
    }
  }