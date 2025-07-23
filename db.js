const mongoose = require('mongoose')
// define the mongo db url
// const mongoURL='mongodb+srv://beerendrar711:fXnCEuEwMOyv7mrz@cluster0.hw4f1gp.mongodb.net/test'
const mongoURL = 'mongodb://localhost:27017/hotel'
// set up mongodb connection
mongoose.connect(mongoURL)
// get default connection 
//mongoose maintains a deefault connection the mongodb connection
const db=mongoose.connection;
// define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to mongodb');
    
})
db.on('error',(error)=>{
    console.log('mongodb connection ',error);
    
})
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
    
})
// export database connection 
module.exports = db;
