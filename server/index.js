// require express and also app = express()
const express = require('express');
const app = express();
// probably need endpoints for all services

const PORT = 3000;

// the usual
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// get for each of the different endpoints / services (?)
app.get('/', function (req, res) {
  res.send('hello world');
});

// listen on port of preference(?) if running locally, i'll probably need different ports for different services or perhaps just different paths?
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});