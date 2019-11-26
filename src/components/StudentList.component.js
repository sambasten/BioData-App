import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Student = props =>(
  <tr>
    <td>{props.student.student_name}</td>
    <td>{props.student.student_age}</td>
    <td>{props.student.student_address}</td>
    <td>{props.student.student_gender}</td>
    <td>{props.student.student_religion}</td>
    <td>{props.student.student_email}</td>
    <td>{props.student.student_phonenumber}</td>
    <td>{props.student.student_stateoforigin}</td>
    <td>
    <Link to={"/edit/" + props.student._id}> Edit </Link>
    </td>
  </tr>
)

export default class StudentList extends Component{
  constructor(props){
    super(props);
    this.state = { students:[] };
  }

  componentDidMount = () => {
    axios.get('http://localhost:4000/students/')
    .then(res => {this.setState({students: res.data});
    })
    .catch(function(err){console.log(err);
    })
  }

  studentList = () => {
    return this.state.students.map(function(currentStudent,i){
      return <Student student={currentStudent} key={i}/>;
    })
  }

	render(){
		return(
            <div>
            <h3>Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Religion</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>State of Origin</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.studentList() }
                    </tbody>
                </table>
            </div>
			)
	}
}