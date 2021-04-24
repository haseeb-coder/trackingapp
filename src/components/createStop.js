import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import {MDBInput} from 'mdbreact'

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStopName = this.onChangeStopName.bind(this);
    this.onChangeBusRouteNumber = this.onChangeBusRouteNumber.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeLatitude= this.onChangeLatitude.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      stopname: '', busRouteNumber: '', longitude: '',  latitude: '', 
    }
  }
  

  onChangeStopName(e){this.setState({stopname : e}); }

  onChangeBusRouteNumber(e){this.setState({busRouteNumber : e});}

  onChangeLongitude(e){this.setState({longitude: e});}
  onChangeLatitude(e){this.setState({latitude: e});}
  
 
  componentDidMount() {
     console.log("Creating Stops");
  };

  onSubmit(e) {
    e.preventDefault();    
      //console.log("Current value of street: ", this.state.query);
      const obj = {
          stopName: this.state.stopname,
          busRouteNumber:this.state.busRouteNumber,
          longitude:this.state.longitude,
          latitude: this.state.latitude,
      };
      console.log("stops sent: ", obj);
      axios.post('/createStops', obj)
          .then( stop =>
            {
              //console.log("student Recieved: ", student , obj);
              //alert.show('Student added')
              window.location.href = '/Stops'
            }
            
          );
      
      this.setState({
          stopName: '', busRouteNumber: '',longitude: '',latitude: '',query:''
      });  
  }
  
 
  
  render() {
    return (
      <div className = "container" style={{ marginTop: 1 , padding:1}}>
       <Header/>
        
          <div className = "row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div><h3>Add New Stops </h3> 
                   <div id = "stopName" > 
                        <MDBInput label="Add Stop Name" size="lg" onBlur={this.validateName} 
                                  getValue = {this.onChangeStopName} />
                    </div> 
                    <div id = "busRouteNumber" > 
                        <MDBInput label="Add Bus Route Number" size="lg" 
                                  getValue = {this.onChangeBusRouteNumber} />
                    </div> 
                    
                    <div id = "longitude" > 
                        <MDBInput label="Add Longitude" size="lg" 
                                  getValue = {this.onChangeLongitude} />
                    </div> 
                    <div id = "latitude" > 
                        <MDBInput label="Add Latitude" size="lg" 
                                  getValue = {this.onChangeLatitude} />
                    </div>                    
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register Stops" className="btn btn-primary "/> 
                </div>                
            </form>
            </div>
            
	      
        </div>
      </div>
    )
  }
}