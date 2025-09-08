var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'/indexpost.html');
});

app.post('/process_post', urlencodedParser, (req, res) => {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response)); 
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
