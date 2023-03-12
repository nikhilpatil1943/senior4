
const mongoose = require("mongoose")

require("../server/conn")
const Mycollection = require("../server/veSchema")
// app.get('/', async(req, res) => {
// data = await Mycollection.find()
// console.log(data)
// // return res.status(201).send(result)
// res.json(data)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Example data

// API endpoint to get data
app.get('/data', async(req, res) => {
  console.log("yes")
  data = await Mycollection.find()
  console.log(data)
  res.json(data)
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});