const express = require('express')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let user = [];

app.get('/', (req,res) => {
    res.send('Hello World!')
});

app.get('/echo/:msg', (req, res) => {
    res.send(req.params.msg);
});

app.post('/echo', (req,res) => {
    res.send(req.body);
});

app.get('/users', (req, res) => {
    res.json(user);
})

app.post('/users', (req, res) => {
    let newUser = {
        name: req.body.name,
        age: req.body.age
    }
    user.push(newUser);
    res.send("User has been added");
})

app.put('/users', (req, res) =>{
    user.pop();
    let modifiedUser = {
        name: req.body.name,
        age: req.body.age
    }
    user.push(modifiedUser);
    res.send("User Modified Successfully")
})

app.delete('/users', (req,res) => {
    user.pop();
    res.send('User data deleted')
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})