var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'/index.html');
});

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response)); 
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
