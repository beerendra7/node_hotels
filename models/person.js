const mongoose = require('mongoose');
// define the schema 
const personSchema = new mongoose.Schema({
    name: { type: String, reqired: true },
    age: { type: Number },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: { type: Number, required: true },
    email: {
        type: String,
        required: true,
        unique: true
    }

})
// create model
const person = mongoose.model('person', personSchema)
module.exports = person;