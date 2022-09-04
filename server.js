// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// Environment Variables
const app = express();
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

const db = mongoose.connection

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))










app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
  })

  // app.listen(PORT, () => {
//     console.log(`*** Listening on http://localhost:${PORT} ***`)
// }) 