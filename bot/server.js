var path = require('path');
const express = require('express');
const app = express();

//show where the static files are 
var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.listen(8000, function (){
    console.log('listening on port 8000');
});



