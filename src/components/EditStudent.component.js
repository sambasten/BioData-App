import React, { Component } from 'react';
import axios from 'axios';


export default class EditStudent extends Component{
  constructor(props){
    super(props);
    this.state = {
      student_name:'',
      student_age:"",
      student_address:"",
      student_gender:"",
      student_religion:"",
      student_email:"",
      student_phonenumber:"",
      student_stateoforigin:""
    }
  }

  componentDidMount = () => {
    //send http get request to backend to retreive information via selected id
    axios.get('http://localhost:4000/students/' + this.props.match.params.id)
    .then(res => {
      this.setState({
        student_name : res.data.student_name,
        student_age : res.data.student_age,
        student_address : res.data.student_address,
        student_gender : res.data.student_gender,
        student_religion : res.data.student_religion,
        student_email : res.data.student_email,
        student_phonenumber : res.data.student_phonenumber,
        student_stateoforigin : res.data.student_stateoforigin,
      })
    })
    .catch((err)=>console.log(err))
  }
  
  onChangeStudentName= (e) =>{
    this.setState({student_name: e.target.value});
  }

  onChangeStudentAge= (e) =>{
    this.setState({student_age: e.target.value});
  }

  onChangeStudentAddress= (e) =>{
    this.setState({student_address: e.target.value});
  }

  onChangeStudentGender= (e) =>{
    this.setState({student_gender: e.target.value});
  }

  onChangeStudentReligion= (e) =>{
    this.setState({student_religion: e.target.value});
  }

  onChangeStudentEmail= (e) =>{
    this.setState({student_email: e.target.value});
  }

  onChangeStudentPhone= (e) =>{
    this.setState({student_phonenumber: e.target.value});
  }

  onChangeStudentStateOfOrigin= (e) =>{
    this.setState({student_stateoforigin: e.target.value});
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const editedStudent  = {
      student_name : this.state.student_name,
      student_age : this.state.student_age,
      student_address : this.state.student_address,
      student_gender : this.state.student_gender,
      student_religion : this.state.student_religion,
      student_email : this.state.student_email,
      student_phonenumber : this.state.student_phonenumber,
      student_stateoforigin: this.state.student_stateoforigin
    };
    console.log(editedStudent);
    //initiate post req to backend endpoint to create new student in database
    axios.post('http://localhost:4000/students/update/'+ this.props.match.params.id, editedStudent)
    .then(res=> console.log(res.data));

    //redirect back to default route
    this.props.history.push('/');
  }

	render(){
		return(
      <div style={{marginTop: 10}}>
      <h3> Update Student </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  
            type="text"
            className="form-control"
            value={this.state.student_name}
            onChange={this.onChangeStudentName}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
            type="number" 
            className="form-control"
            value={this.state.student_age}
            onChange={this.onChangeStudentAge}
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input 
            type="text" 
            className="form-control"
            value={this.state.student_address}
            onChange={this.onChangeStudentAddress}
          />
        </div>

        <div className="form-group">
          <label> Gender: </label>
          <div className="form-check form-check-inline">
            <input  
              className="form-check-input" 
              type="radio" 
              value="Male"
              checked={this.state.student_gender==='Male'} 
              onChange={this.onChangeStudentGender}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input" 
              type="radio"  
              value="Female" 
              checked={this.state.student_gender==='Female'} 
              onChange={this.onChangeStudentGender}
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input" 
            type="radio" 
            value="Other" 
            checked={this.state.student_gender==='Other'} 
            onChange={this.onChangeStudentGender}
            />
            <label className="form-check-label">Other</label>
          </div>
        </div>

              
        <div className="form-group">
          <label> Religion: </label>
          <div className="form-check form-check-inline">
            <input  className="form-check-input" 
              type="radio" 
              value="Christian"
              checked={this.state.student_religion==='Christian'} 
              onChange={this.onChangeStudentReligion}
            />
            <label className="form-check-label">Christian</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input" 
              type="radio"  
              value="Muslim" 
              checked={this.state.student_religion==='Muslim'} 
              onChange={this.onChangeStudentReligion}
            />
            <label className="form-check-label">Muslim</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input" 
                type="radio" 
                value="Other" 
                checked={this.state.student_religion==='Other'} 
                onChange={this.onChangeStudentReligion}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>

          <div className="form-group">
            <label>EMail: </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.student_email}
              onChange={this.onChangeStudentEmail}
            />
          </div>
                  
          <div className="form-group">
            <label>Phone: </label>
            <input 
              type="number" 
              className="form-control"
              value={this.state.student_phonenumber}
              onChange={this.onChangeStudentPhone}
            />
          </div>

          <div className="form-group">
            <label>State of Origin: </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.student_stateoforigin}
              onChange={this.onChangeStudentStateOfOrigin}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Update Student" className="btn btn-primary" />
          </div>
        </form>
    </div>    
			)
	}
}

