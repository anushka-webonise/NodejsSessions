const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

const PORT=8080;

app.listen(8080, () => {
    
   console.log("Example app listening at")
}) 
