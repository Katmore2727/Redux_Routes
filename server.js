const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

// const bodyParser = bodyParser.json();
// app.use(bodyParser);


app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res)=>{
    res.redirect('/login');
})


app.get('/login', (req, res)=>{
    res.render('/login.ejs');
})

app.post('/login',(req, res)=>{
    console.log('hello');
    console.log(req.body.username);
    response1 = {
        UName:req.body.username,
        Upass:req.body.password
    }
    console.log(response1.Upass); 
})

app.get('/register', (req, res)=>{
    res.render('register.ejs');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))