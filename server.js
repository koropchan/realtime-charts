const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //If PORT exist then use 'port' otherwise use port 9000


app.use(express.static(path.join(__dirname, 'build'))); //Tell express to use 'build' directory

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));  // If not 'build' directory then use 'index.html'
});

app.listen(port);