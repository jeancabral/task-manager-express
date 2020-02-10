const express = require('express');

//create an express application 
const app = express();

//add a port listen
app.listen(3000, function () {
  console.log('🤖  Hello! the task manager app listening on port 3000!');
});
