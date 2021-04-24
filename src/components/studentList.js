import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './singleStudent';
import Header from './header'


export default class IndexStudent extends Component {

  constructor(props) {
      super(props);
      this.state = {students: []}; 
    }
    componentDidMount(){
      axios.get('/getstudent')
        .then(response => {
          console.log("Student List: ", response.data);
          this.setState({ students: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }       
    tabRow(){
      return this.state.students.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    

    render() {
      return (
        
        <div>
          <Header/>
          <h3 align="center">Student List</h3>
           
          <Link to={"/addStudent"} className="btn btn-primary btn-lg m-4">Add Student</Link>      
          <table className="table table-striped" style={{ marginTop: 1 }}>
            <thead>
              <tr>
                
                <th>Student Name</th>
                <th> Registration Number </th>
                <th>Departmennt</th>
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