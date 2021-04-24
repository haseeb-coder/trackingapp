import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import {MDBInput} from 'mdbreact'

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeRouteNaam= this.onChangeRouteNaam.bind(this);
    this.onChangeBusRouteNumber= this.onChangeBusRouteNumber.bind(this);
    this.onChangeBussNumber= this.onChangeBussNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      RouteNaam: '', busRouteNumber: '', bussNumber: ''
    }
  }
  

  onChangeRouteNaam(e){
    this.setState({RouteNaam : e});
    console.log("After change", this.state.RouteNaam)
 }

  onChangeBusRouteNumber(e){this.setState({busRouteNumber : e});}

  onChangeBussNumber(e){this.setState({bussNumber: e});}
  
  
 
  componentDidMount() {
     console.log("Creating Route");
  };

  onSubmit(e) {
    e.preventDefault();    
      //this.setState({RouteNaam : "testRoute"})
      //console.log("Current value of RouteNaam: ", this.state.RouteNaam);
      const obj = {
          RouteName: this.state.RouteNaam,
          busRouteNumber:this.state.busRouteNumber,
          bussNumber:this.state.bussNumber,
        
      };
      //console.log("Route sent: ", obj);
      axios.post('/createRoute', obj)
          .then( Route =>
            {
              console.log("Route Recieved: ", Route );
              //alert.show('Student added')
              window.location.href = '/Routes'
            }
            
          ); 
  }
  
 
  
  render() {
    return (
      <div className = "container" style={{ marginTop: 1 , padding:1}}>
       <Header/>
        
          <div className = "row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div><h3>Add New Routes </h3> 
                   <div id = "RouteNaam" > 
                        <MDBInput label="Add Route Name" size="lg" 
                                  getValue = {this.onChangeRouteNaam} />
                    </div> 
                    <div id = "busRouteNumber" > 
                        <MDBInput label="Add Bus Route Number" size="lg" 
                                  getValue = {this.onChangeBusRouteNumber} />
                    </div> 
                    
                    <div id = "bussNumber" > 
                        <MDBInput label="Add Bus Number" size="lg" 
                                  getValue = {this.onChangeBussNumber} />
                    </div> 
                                
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register Route" className="btn btn-primary "/> 
                </div>                
            </form>
            </div>
            
	      
        </div>
      </div>
    )
  }
}