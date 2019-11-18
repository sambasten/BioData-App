//required dependencies
const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT= 4000;

//middlewares
app.use(cors());
app.use(bodyParser.json());


//server listens on port 4000
app.listen(PORT, function(){
  console.log("Server running on port" + PORT);
})
