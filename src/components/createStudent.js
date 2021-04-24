import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import {MDBInput} from 'mdbreact'

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeClassrm = this.onChangeClassrm.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getRollNmbr = this.getRollNmbr.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this)

    this.state = {
      name: '', classrm: '', mobile: '',  rollNumber: '', email:'',password:'',
    }
  }
  onChangeEmail(e){
    this.setState({email : e}); 
    console.log(this.state.email)
  }

  onChangePassword(e){
    this.setState({password : e}); 
    console.log(this.state.password)
  }

  getRollNmbr = e =>{    this.setState({rollNumber : e});  }

  onChangeName(e){this.setState({name : e}); }

  onChangeClassrm(e){this.setState({classrm : e});}

  onChangeMobile(e){this.setState({mobile: e});}
  
 
  componentDidMount() {
     console.log("Creating Student");
  };

  onSubmit(e) {
    e.preventDefault();    
      //console.log("Current value of street: ", this.state.query);
      const obj = {
          name : this.state.name,
          email:this.state.email,
          password:this.state.password,
          department : this.state.classrm,
          contact_number : this.state.mobile,
          registration_number: this.state.rollNumber,
          role_id:3,
          
      };
      console.log("student sent: ", obj);
      axios.post('/createStudent', obj)
          .then( student =>
            {
              //console.log("student Recieved: ", student , obj);
              //alert.show('Student added')
              window.location.href = '/Students'
            }
            
          );
      
      this.setState({
          name: '', classrm: '',mobile: '',address : '',query:''
      });  
  }
  
 
  
  render() {
    return (
      <div className = "container" style={{ marginTop: 1 , padding:1}}>
       <Header/>
        
          <div className = "row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div><h3>Add New Student </h3> 
                   <div id = "studentName" > 
                        <MDBInput label="Add Student Name" size="lg" onBlur={this.validateName} 
                                  getValue = {this.onChangeName} />
                    </div> 
                    <div id = "email" > 
                        <MDBInput label="Add email" size="lg" 
                                  getValue = {this.onChangeEmail} />
                    </div> 
                    
                    <div id = "password" > 
                        <MDBInput label="Add Password" size="lg" 
                                  getValue = {this.onChangePassword} />
                    </div> 
                    <div className="form-group">
                      <MDBInput label="Enter Registration Number" size="lg" 
                      getValue = {this.getRollNmbr} />
                    </div>
                    <div id = "classRoom" > 
                        <MDBInput label="Add Department" size="lg" 
                                  getValue = {this.onChangeClassrm} />
                    </div>

                    <div id = "contactNumber"> 
                    <MDBInput label="Add Contact Number" size="lg" 
                                  getValue = {this.onChangeMobile}
                                 />
                    </div>

                     
                    
                    
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register Student" className="btn btn-primary "/> 
                </div>                
            </form>
            </div>
            
	      
        </div>
      </div>
    )
  }
}