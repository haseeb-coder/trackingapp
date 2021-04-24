import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import {MDBInput} from 'mdbreact'

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeBusNumber = this.onChangeBusNumber.bind(this);
    this.onChangeBusRouteNumber = this.onChangeBusRouteNumber.bind(this);
    this.onChangeBusType = this.onChangeBusType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  

    this.state = {
      busNumber: '',  busRouteNumber: '',  busType:'',
    }
  }

  onChangeBusNumber(e){this.setState({busNumber : e}); }
  onChangeBusRouteNumber(e){this.setState({busRouteNumber: e});}
  onChangeBusType(e){this.setState({busType: e});}
 
  componentDidMount() {
     console.log("Creating Bus");
  };

  onSubmit(e) {
    e.preventDefault();    
      //console.log("Current value of street: ", this.state.query);
      const obj = {
          busNumber: this.state.busNumber,
          busRouteNumber:this.state.busRouteNumber,
          busType:this.state.busType,
          
          
      };
      console.log("Bus sent: ", obj);
      axios.post('/createBus', obj)
          .then( Bus =>
            {
              //console.log("student Recieved: ", student , obj);
              //alert.show('Student added')
              window.location.href = '/Buses'
            }
            
          );
      
      this.setState({
          busNumber: '', busRouteNumber: '',busType:'',
      });  
  }
  
 
  
  render() {
    return (
      <div className = "container" style={{ marginTop: 1 , padding:1}}>
       <Header/>
        
          <div className = "row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div><h3>Add New Bus </h3> 
                   <div id = "busNumber" > 
                        <MDBInput label="Add Bus Number" size="lg" 
                                  getValue = {this.onChangeBusNumber} />
                    </div> 
                    <div id = "bussRouteNumber" > 
                        <MDBInput label="Add Bus Route Number" size="lg" 
                                  getValue = {this.onChangeBusRouteNumber} />
                    </div> 
                    
                    <div id = "busType" > 
                        <MDBInput label="Add Bus Type" size="lg" 
                                  getValue = {this.onChangeBusType} />
                    </div> 
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register Bus" className="btn btn-primary "/> 
                </div>                
            </form>
            </div> 
        </div>
      </div>
    )
  }
}