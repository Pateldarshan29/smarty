//create express server

const connectToMongo = require('./db');
const express = require('express');
const bodyparser = require('body-parser') 

connectToMongo();
const app = express();
const port = 5000;
app.use(bodyparser.json())
// app.use(express.json());

// const cors = require("cors");
// app.use(cors())

app.use('/api', require('./routes/author.js'));
app.use('/api', require('./routes/book.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})