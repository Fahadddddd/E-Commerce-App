const express = require('express');     // framework of js
const mongoose = require('mongoose');  // For working with mongodb
const morgan = require('morgan');       // Log in console which api has been called
const bodyParser = require('body-parser');  // Parse the incoming value
const cors = require('cors');
const path = require('path');
const app = express();
//const { ServerSelectionError } = require('mongodb');


const AddressRoute = require('./routes/address')
const AuthRoute = require('./routes/auth')


mongoose.connect('mongodb://127.0.0.1:27017/testdb',{useNewUrlParser : true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error',(err) => {
    console.log(`Error occurred while connecting to MongoDB ${err}`);
})

db.once('open' , () => {
    console.log("Connected to MongoDB");
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors());

app.use(express.json());

// app.use(express.static(path.join(__dirname, '.ecomapp/build')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..' , 'frontend', 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' , 'frontend', 'build', 'index.html'));
});


const PORT = process.env.PORT || 3000

app.listen(PORT ,() =>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/address', AddressRoute)
app.use('/api', AuthRoute)

// app.get("/apii", (req,res) => {
//     res.send("Hello World");
// })