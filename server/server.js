require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const session = require('express-session');


const app = express();
app.use(bodyParser.json());
//session
app.use(session({
    secret: process.env.SESSION_SECRET,   //require -> provides the key for the session encryption
    resave: false,   //optional -> which says whether to save a session that wasnt changed
    saveUninitialized: true    //optional -> which says whether to save a session that is new and wasnt added to
}))

//massive
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//auth endpoints
app.post('/api/auth/login')
app.post('/api/auth/register')
app.post('/api/auth/logout')
//properties endpoints
app.post('/api/properties')
app.get('/api/properties', controller.getHouses)
app.delete('/api/properties/:id')


const port = process.env.SERVER_PORT || 3076;
app.listen(port, ()=> {
    console.log(`Server is up and running on ${port}`)
})