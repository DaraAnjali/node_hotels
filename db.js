// const mongoose = require('mongoose');


// const mongoURL ='mongodb://localhost:27017/hotels'

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// db.on('connected', () => {
//     console.log('Connected to MongoDB server');
// });

// db.on('disconnected', () => {
//     console.log('disconnected to MongoDB server');
// });

// module.exports =db;





const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL); // No need for deprecated options

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => { 
    console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;
