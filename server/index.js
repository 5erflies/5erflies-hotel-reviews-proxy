// require express and also app = express()
const express = require('express');
const app = express();
const url = require('url');

// TODO: write own middleware
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
// probably need endpoints for all services

const serverOne = 'http://localhost:3001';
const serverTwo = 'http://localhost:3002'; const serverThree = 'http://localhost:3003';

const PORT = 3004;



//middleware

// the usual
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// get for each of the different endpoints / services (?)
// app.get('/', function (req, res) {
//   res.send('hello world');
// });

app.all('/reviews/*', function(req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all('/listing/*', function(req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  console.log('redirecting to Server2');
  apiProxy.web(req, res, {target: serverTwo});
});

app.all('/test1/*', function(req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  console.log('redirecting to Server3');
  apiProxy.web(req, res, {target: serverThree});
});

// listen on port of preference(?) if running locally, i'll probably need different ports for different services or perhaps just different paths?
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});