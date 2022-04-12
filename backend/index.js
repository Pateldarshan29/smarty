//create express server

const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 5000;

// app.use(express.json());

// const cors = require("cors");
// app.use(cors())

app.use('/api/author', require('./routes/author.js'));
app.use('/api/book', require('./routes/book.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})