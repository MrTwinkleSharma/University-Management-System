//3rd Party Modules
require('dotenv/config');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || '5000';
app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use(morgan('tiny'));

//Handling API Requests
app.get('/', (req, res, next)=>{
    res.send('Get Request on HOME PAGE of Backend!');
})


//Listen the connections
app.listen(PORT, ()=>{
        console.log("Server is Listening on Port ",PORT);
 });
