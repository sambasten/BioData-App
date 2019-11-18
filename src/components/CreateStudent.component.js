import React, { Component } from 'react';

class CreateStudent extends Component{
  constructor(props){
      super(props);
      this.state = {
        student_name:"",
        student_age:"",
        student_address:"",
        student_gender:"",
        student_religion:"",
        student_email:"",
        student_phonenumber:"",
        student_stateoforigin:""
      }
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
	console.log(`Form Submitted`);
	console.log(`Student Name: ${this.state.student_name}`);
	console.log(`Student Age: ${this.state.student_age}`);
	console.log(`Student Address: ${this.state.student_address}`);
	console.log(`Student Gender: ${this.state.student_gender}`);
	console.log(`Student Religion: ${this.state.student_religion}`);
  console.log(`Student Email: ${this.state.student_email}`);
  console.log(`Student Phone Number: ${this.state.student_phonenumber}`);
  console.log(`Student State of Origin: ${this.state.student_stateoforigin}`);

  this.setState({
    student_name:"",
    student_age:"",
    student_address:"",
    student_gender:"",
    student_religion:"",
    student_email:"",
    student_phonenumber:"",
    student_stateoforigin:""
    });
  }

  render() {
		return(
      <div style={{marginTop: 10}}>
        <h3>Create New Student</h3>
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
              <input type="submit" value="Create Student" className="btn btn-primary" />
            </div>
          </form>
      </div>    
		);
	}
}

export default CreateStudent;