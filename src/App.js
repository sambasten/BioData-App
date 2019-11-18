import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StudentList from "./components/StudentList.component.js";
import EditStudent from "./components/EditStudent.component.js";
import CreateStudent from "./components/CreateStudent.component.js";

import logo from "./logo111.png";

class App extends Component {
  render(){
    return (
      <Router>
      <div className="container"> 
      
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="http://alutamartltd.com"><img alt="" src={logo} width="30" height="30"/></a>
            <Link to="/" className="navbar-brand">AluSoft BioData App</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link to="/" className="nav-link">Students</Link>
                  </li>
                  <li className="nav-item active">
                  <Link to="/create" className="nav-link">Create Student</Link>
                  </li>
              </ul>  
            </div>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search for Student" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
      <br/>
      <br/>
      <br/>
      <main role="main" className="container">
          <Route path="/" exact component={StudentList}/>
          <Route path="/edit/:id" component={EditStudent}/>
          <Route path="/create" component={CreateStudent}/>
      </main>
    </div>
    </Router>
    );
  }
}

export default App;
