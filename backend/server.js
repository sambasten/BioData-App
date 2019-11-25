//required dependencies
const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT= process.env.PORT || 4000;

const mongoose = require('mongoose');

const studentRoutes = express.Router();

let Students = require('./student.model');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Database connection handlers
mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true });
const connection= mongoose.connection;
connection.once('open', ()=>{
  console.log("MongodB database connection established successfully");
});

//add router studentRoutes as middleware
app.use('/students', studentRoutes);

//define route for getting list of students
studentRoutes.route('/').get(function(req, res){
  Students.find({},function(err,students){
    if (err){
      console.log (err);
    }else{
      res.json(students);
    }
  });
});

//define route for getting a student based on id
studentRoutes.route('/:id').get(function(req, res){
  let id= req.params.id;
  Students.findById(id, function(err, student){
    res.json(student);
  });
});

//define route for adding a new student 
studentRoutes.route('/add').post(function(req,res){
  let newStudent = new Students(req.body);
  newStudent.save()
  .then(student => {
    res.status(200).json({'student':'New student added successfully'});
  })
  .catch(err=>{
    res.status(400).send('Adding new student failed');
  });
});

//define route for updating a student data
studentRoutes.route('/update/:id').post(function(req,res){
  Students.findById(req.params.id, function(err, student){
    if(!student){
      res.status(400).send("Data is not found");
    }
    else{
      student.student_name = req.body.student_name;
      student.student_age = req.body.student_age;
      student.student_address = req.body.student_address;
      student.student_gender = req.body.student_gender;
      student.student_religion = req.body.student_religion;
      student.student_emial = req.body.student_email;
      student.student_phonenumber = req.body.student_phonenumber;
      student.student_stateoforigin = req.body.student_stateoforigin;
    }
      student.save()
      .then(student => {
        res.json('Student Updated!');
      })
      .catch(err=>{
        res.status(400).send('Update not successful');
    });
  });
});


//server listens on port 4000
app.listen(PORT, ()=> {
  console.log("Server running on port:" + PORT);
});
