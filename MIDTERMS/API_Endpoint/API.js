const express = require('express');
const bParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bParser.urlencoded({ extended: true }));
app.use(bParser.json());


let users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + '/form.html')
});

app.get('/api/users', (req, res) => {
    res.send(users)
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(h => h.id === parseInt(req.params.id))
    if (!user) return res.status(404).send("User ID was NOT FOUND");
    res.send(user)
});

app.get('/api/users/:id/:name/:age', (req, res) => {
    const {id, name, age } = req.params;
    res.send(`ID: ${id}, Name: ${name}, Age: ${age}`);
});

app.post('/process_post', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: parseInt(req.body.age),
        salary: parseInt(req.body.salary)
    };
    users.push(user);
    res.send(user);
});

app.post("/delete_user", (req, res) => {
    const id = parseInt(req.body.id);
    users = users.filter(u => u.id !== id);
    res.send("User deleted");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
