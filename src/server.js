'use strict';
console.log('labas');
const { request, response } = require('express');
// inportuojam express
const express = require('express');
const cors = require('cors');
const {fakeName} = require('./modules/cas');


// sukuriam beak end aplikacija/serveri
const app = express();
const PORT = process.env.PORT || 3000;

// Midelwere -funkcionalumas (kai gavome funkcija bet dar neatsakem)
app.use(cors());


const {users} = require('./data');

// routes
app.get('/', function(request, response) {
response.send('labas express freimvork');
})
app.get('/about', (request, response) =>{
    response.send('<h2> apie mane</h2>')
});
// get api/users

// app.get('/api/users', (request, response) =>{
//   response.json(users);
// });
// app.get('/api/users/1', (request, response) =>{
//   response.json(users[0]);
// });
// app.get('/api/fake-user', (request, response) =>{
//   response.json({user: fakeName()});
// });
// // GET/api/fake-user - grazinti random sugeneruota user su casual

// app.get('/api/users/2', (request, response) =>{
//   response.json(users[1]);
// });

// 404 page
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  });
// paleidziam serveri
app.listen(PORT, () => console.log('server dirba portas', PORT));