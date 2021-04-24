import React, { Component } from 'react';
import { Map,  Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdbreact";
import './dashboard.css';




const mapStyles = {
    width: '75%',
    height: '80%',  
  };
  
class ShowMap extends Component {

    constructor(props){
        super(props);
        this.state = { 
          showingInfoWindow: false, showAll:true, currTrip:"",activeMarker: {}, tripsAll: [], selectedPlace: {}, zoom: 6,  
        }        
        //console.log({msg:"Props received", arr: this.props.tripPass.trips})
    }
    checkTest = () =>{
      console.log("In check Test")
    }

    displayMarkers = () => {
      //console.log("display Markers", this.props.tripPass.trips[0].busNumber)
      return this.props.tripPass.trips.map((trip, index) => {
        //console.log("Looper", trip.busNumber, trip.startlatitude)
        return <Marker key={index} id={index} position={{
                      lat: trip.startLatitude,
                      lng: trip.startLongitude
      }} 
      onClick={this.onMarkerClick}
      name={trip.busNumber} />
      })
    }

      onMarkerClick = (props, marker, e) =>{
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
      
      async loadRoute(trip){
        //console.log({id : trip.id, bus: trip.busNumber, lat: trip.startLatitude, lng:trip.startLongitude})
        this.state.currTrip = await (await axios.get('/getTripLocation/'+trip.busNumber)).data
        console.log({msg: "Currrrr", updatedTrip: this.state.currTrip.trip.startLatitude})
        this.setState({
          zoom : 16,
          currLat : this.state.currTrip.trip.startLatitude,
          currLng: this.state.currTrip.trip.startLongitude, 
          showAll:false
        })
        //console.log({currLat: this.state.currLat, currLng: this.state.currLng})

        
      }
       
    render() {
        const{currLat, currLng, zoom, showAll, currTrip} = this.state;
        //console.log("zoom", this.props.currLat)
        return (
          
            <div>          
          <MDBContainer >
          <MDBRow>
            <MDBCol xs="2"> <h5>Active Trips</h5>
            { this.props.tripPass.trips.length > 0 ?
              (<MDBListGroup >
                { 
                  this.props.tripPass.trips.map((trip, key) => {
                    return (<MDBBtn key = {trip.id} onClick = {() =>this.loadRoute(trip)}
                    >
                      {trip.busNumber}
                    </MDBBtn>)
                    })
                }
              </MDBListGroup>): (<div className="alert alert-danger" role="alert">
                                            No Active Trip Found</div>)
                  
            }
             
            </MDBCol>
            <MDBCol xs="10" style={{height: 450}}>
              { showAll ?(
              <Map google={this.props.google} zoom={this.props.zoom} style={mapStyles}
                    styles={
                      [
                    ]
                  }
                     initialCenter={{
                                lat: 32.125021,
                                lng: 74.897882
                              }}>
                  {this.displayMarkers()
                  }
                  <InfoWindow         
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}  
                  >
                      <div>{this.state.selectedPlace.name} </div>
                  </InfoWindow>
                  </Map>)
                  :
                  (
                    
                    <Map google={this.props.google} zoom={zoom} style={mapStyles} 
                                center={{ lat: currLat,
                                          lng:currLng }}>
                  <Marker position={{
                            lat: currTrip.trip.startLatitude,
                            lng: currTrip.trip.startLongitude
                          }} 
                          onClick={this.onMarkerClick}
                          name={currTrip.trip.busNumber} />
                  
                  
                  <InfoWindow         
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}  
                  >
                      <div>{this.state.selectedPlace.name} </div>
                  </InfoWindow>
                  </Map>
                  )
              }
            </MDBCol>
          </MDBRow>
        </MDBContainer> 
        </div>                                              
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDpUgsaFm4fD35dCZz5c9U2mfBGMYZPfvw'
  })(ShowMap);
  
  

