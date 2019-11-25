const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
 student_name:{
   type: String
 },
 student_age:{
   type: Number
 },
 student_address:{
   type: String
 },
 student_gender:{
   type: String
 },
 student_religion:{
   type: String
 },
 student_email:{
   type:String
 },
 student_phonenumber:{
   type: Number
 },
 student_stateoforigin:{
   type: String
 }
});

module.exports = mongoose.model('Students', StudentSchema);