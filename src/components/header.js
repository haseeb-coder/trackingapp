import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



export default class schoolHeader extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      schoolId : this.props.schoolId
    }
  }
  
  render(){
        return(
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{fontSize:16, fontWeight:600}}>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto" >

                    <li style={{paddingRight:20}}>
                        <Link to={'/home'} className="nav-link">Home
                        </Link>
                    </li>

                    <li style={{paddingRight:20}}>
                        <Link to={'/students'} className="nav-link">Students
                        </Link>
                    </li>
                    
                    <li style={{paddingRight:20}}>
                        <Link to={'/faculty'} className="nav-link">Faculty
                        </Link>
                    </li>

                    <li style={{paddingRight:20}}>
                        <Link to={'/Buses'} className="nav-link">Bus Information
                        </Link>
                    </li>
                    <li style={{paddingRight:20}}>
                        <Link to={'/Stops'} className="nav-link">Stops Information
                        </Link>
                    </li>
                    <li style={{paddingRight:20}}>
                        <Link to={'/Routes'} className="nav-link">Routs Information
                        </Link>
                    </li>
                
                    <li style={{paddingRight:20}}>
                        <Link to={'/indexReport'} className="nav-link">Reports
                        </Link>
                    </li>

                    <li  style={{paddingRight:20}} >
                        <Link to={'/login'} className="nav-link">Sign Out
                        </Link> 
                    </li>
                    
                  </ul>
                </div>
              </nav> <br/>
              </div>
                  
            
        );
    
    }
}