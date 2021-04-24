import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import {MDBInput} from 'mdbreact'

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangedesigination= this.onChangedesigination.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
   
  

    this.state = {
      name: '',  mobile: '',  email:'',password:'',desigination:'',
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

  onChangeName(e){this.setState({name : e}); }
  onChangeMobile(e){this.setState({mobile: e});}
  onChangedesigination(e){this.setState({desigination: e});}
 
  componentDidMount() {
     console.log("Creating Faculty");
  };

  onSubmit(e) {
    e.preventDefault();    
      //console.log("Current value of street: ", this.state.query);
      const obj = {
          name : this.state.name,
          email:this.state.email,
          password:this.state.password,
          contact_number : this.state.mobile,
          faculty_desigination: this.state.desigination,
          role_id:2,
          
      };
      console.log("faculty sent: ", obj);
      axios.post('/createFaculty', obj)
          .then( student =>
            {
              //console.log("student Recieved: ", student , obj);
              //alert.show('Student added')
              window.location.href = '/Faculty'
            }
            
          );
      
      this.setState({
          name: '', mobile: '',desigination:'',query:''
      });  
  }
  
 
  
  render() {
    return (
      <div className = "container" style={{ marginTop: 1 , padding:1}}>
       <Header/>
        
          <div className = "row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div><h3>Add New Faculty </h3> 
                   <div id = "facultyName" > 
                        <MDBInput label="Add Faculty Name" size="lg" onBlur={this.validateName} 
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
                    <div id = "contactNumber"> 
                    <MDBInput label="Add Contact Number" size="lg" 
                                  getValue = {this.onChangeMobile} />
                    </div>
                    <div id = "desigination"> 
                    <MDBInput label="Add Desigination" size="lg" 
                                  getValue = {this.onChangedesigination}
                                 />
                    </div>

                     
                    
                    
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register Faculty" className="btn btn-primary "/> 
                </div>                
            </form>
            </div>
            
	      
        </div>
      </div>
    )
  }
}