import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Home from './components/home'
import Students from './components/studentList'
import Faculty from './components/facultylist'
import Buses from './components/Buseslist'
import Stops from './components/Stopslist'
import Routes from './components/routelist'
import AddStudent from './components/createStudent'
import AddFaculty from './components/createFaculty'
import AddBuses from './components/createBus'
import AddStop from './components/createStop'
import AddRoute from './components/createRoute'

 
function App() {  
  return (
    <Router>   
      <Switch>     
          <Route exact path="/" component = {Login}/>
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/home" component = {Home}/>
          <Route exact path="/Students" component = {Students}/>
          <Route exact path="/Faculty" component = {Faculty}/>
          <Route exact path="/Buses" component = {Buses}/>
          <Route exact path="/Stops" component = {Stops}/>
          <Route exact path="/Routes" component = {Routes}/>
          <Route exact path="/addStudent" component = {AddStudent}/>
          <Route exact path="/addFaculty" component = {AddFaculty}/>
          <Route exact path="/addBuses" component = {AddBuses}/>
          <Route exact path="/addStops" component = {AddStop}/>
          <Route exact path="/addRoute" component = {AddRoute}/>
      </Switch>    
    </Router>
  );  
  
}
export default App;
