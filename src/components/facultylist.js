import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './faculty';
import Header from './header'


export default class IndexFaculty extends Component {

  constructor(props) {
      super(props);
      this.state = {faculty: []}; 
    }
    componentDidMount(){
      axios.get('/getfaculty')
        .then(response => {
          console.log("faculty  List: ", response.data);
          this.setState({ faculty: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }       
    tabRow(){
      return this.state.faculty.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    

    render() {
      return (
        <div>
          <Header/>
          <h3 align="center">Faculty List</h3>
           
          <Link to={"/addfaculty"} className="btn btn-primary btn-lg m-4">Add Faculty</Link>      
          <table className="table table-striped" style={{ marginTop: 1 }}>
            <thead>
              <tr>
                
                <th>faculty Name</th>
                <th>Desigination</th>
                <th>Contact Number</th>

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