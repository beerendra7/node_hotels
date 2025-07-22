const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
// require('dotenv').config()
const port=process.env.PORT || 3000
const db = require('./db.js');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// app.use(express.json())


app.get('/', (req, res) => {
    res.send("welcome to hotel")
});a
// comment add



// import personroute
const personroute = require('./routes/personroute.js')
const menurouter = require('./routes/menuroute.js')
// use the route
app.use('/person',personroute)
app.use('/menu',menurouter);

app.listen(port, () => console.log(`server is running on ${port}`));
