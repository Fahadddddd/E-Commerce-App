// const express = require('express');     // framework of js
// const mongoose = require('mongoose');  // For working with mongodb
// const morgan = require('morgan');       // Log in console which api has been called
// const bodyParser = require('body-parser');  // Parse the incoming value
// const cors = require('cors');
// const Razorpay = require("razorpay");
// require("dotenv").config();
// const path = require('path');
// const nodemailer = require('nodemailer');
// const app = express();


// // const productsRouter = require('./routes/product');
// //const { ServerSelectionError } = require('mongodb');


// const AddressRoute = require('./routes/address')
// const ReturnRoute = require('./routes/return')
// const AuthRoute = require('./routes/auth')



// const uri = process.env.MONGOD_URI;

// mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology: true});


// const db = mongoose.connection;

// db.on('error',(err) => {
//     console.log(`Error occurred while connecting to MongoDB ${err}`);
// })

// db.once('open' , () => {
//     console.log("Connected to MongoDB");
// })

// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname, '.ecomapp/build')));

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '..' , 'frontend', 'build')));

// // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..' , 'frontend', 'build', 'index.html'));
// });





// const PORT = process.env.PORT || 5000


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'Driftz@gmail.com',
//       pass: 'Ruw@id007',
//     },
//   });
  
//   // Endpoint to request OTP
//   app.post('/reqOTP', (req, res) => {
//     const { email } = req.body;
  
//     // Generate a random OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
//     const mailOptions = {
//       from: 'Driftz@gmail.com',
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is ${otp}`,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ message: 'Error sending OTP' });
//       }
//       console.log('Email sent:', info.response);
//       // Save OTP in session or database for later verification
//       req.session.otp = otp; // Example using session
//       res.status(200).json({ message: 'OTP sent to email' });
//     });
//   });
  
//   // Endpoint to verify OTP
//   app.post('/verifyOTP', (req, res) => {
//     const { email, otp } = req.body;
  
//     // Check if the OTP matches
//     if (req.session.otp === otp) {
//       res.status(200).json({ message: 'OTP verified' });
//     } else {
//       res.status(400).json({ message: 'Invalid OTP' });
//     }
//   });
  




// app.post("/order" , async (req,res) => {

//     try{
//     const razorpay = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_SECRET,
//     });


//     const options = req.body;
//     const order = await razorpay.orders.create(options);

//     if(!order)
//     {
//         res.status(500).json({message : "Something went wrong" , status : false})
//     }

//     res.json(order);
//     } catch(err)
//     {
//         console.log("Error");
//     }
// });



// app.listen(PORT ,() =>{
//     console.log(`Server is running on port ${PORT}`)
// })


// app.use('/api/address', AddressRoute)
// app.use('/api/return', ReturnRoute)
// app.use('/api', AuthRoute)

// // app.use('/api/product', productsRouter);




// // app.get("/apii", (req,res) => {
// //     res.send("Hello World");
// // })



const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
// const PORT = process.env.PORT || 5000;

// ---------------- MIDDLEWARE (FIRST) ----------------
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://yusii-frontend.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors());

// ---------------- ROUTES ----------------
const AddressRoute = require("./routes/address");
const AuthRoute = require("./routes/auth");

app.use("/api/address", AddressRoute);
app.use("/api", AuthRoute);

// ---------------- PAYMENTS ----------------
app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const order = await razorpay.orders.create(req.body);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Payment error" });
  }
});

// ---------------- EMAIL (SECURE) ----------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ---------------- STATIC FRONTEND (LAST) ----------------
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "frontend", "build", "index.html")
  );
});

// ---------------- DB + SERVER START (LAST) ----------------
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGOD_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB error:", err);
    process.exit(1);
  });

