//3rd Party Modules
require('dotenv/config');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

const adminRoute = require('./routes/adminRoute');
const studentRoute = require('./routes/studentRoute');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || '5000';


app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use(morgan('tiny'));


//Handling API Requests
app.get('/', (req, res)=>{
    res.send('Get Request on HOME PAGE of Backend!');
})

app.use('/api/student', studentRoute);
app.use('/api/admin', adminRoute);
app.use('/api/user', userRoute);


//Listen the connections
app.listen(PORT, ()=>{
        console.log("Server is Listening on Port ",PORT);
 });
