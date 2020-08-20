// require express and also app = express()
const express = require('express');
// const cors = require('cors');
const axios = require('axios');
const app = express();
const url = require('url');

// TODO: write own middleware
// const httpProxy = require('http-proxy');
// const apiProxy = httpProxy.createProxyServer();
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

// the proxy sends a request to the target
// receives a response from the target
// send the response back to the client

// app.all('/listing/*', function(req, res) {
//   const queryObject = url.parse(req.url, true).query;
//   console.log(queryObject);
//   console.log('redirecting to Server2');
//   apiProxy.web(req, res, {target: serverOne});
// });

// app.all('/reviews/*', function(req, res) {
//   const queryObject = url.parse(req.url, true).query;
//   console.log(queryObject);
//   console.log('redirecting to Server1');
//   apiProxy.web(req, res, {target: serverTwo});
// });

// app.all('/test1/*', function(req, res) {
//   const queryObject = url.parse(req.url, true).query;
//   console.log(queryObject);
//   console.log('redirecting to Server3');
//   apiProxy.web(req, res, {target: serverThree});
// });

app.get('/listing*', (req, res) => {
  const sendData = (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  };
  const getData = (callback) => {
    axios.get(serverOne + req.url)
      .then((res) => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData(sendData);
});

app.get('/reviews*', (req, res) => {
  const sendData = (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  };
  const getData = (callback) => {
    axios.get(serverTwo + req.url)
      .then((res) => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData(sendData);
});

app.get('/test1*', (req, res) => {
  const sendData = (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  };
  const getData = (callback) => {
    axios.get(serverThree + req.url)
      .then((res) => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getData(sendData);

  // axios.get(serverThree + req.url)
  //   .then((req, res) => {
  //     res.status(200).send(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

});

// app.route('http://localhost:3003/*')
//   .all(function (req, res, next) {
//     // runs for all HTTP verbs first
//     // think of it as route specific middleware!
//   })
//   .get(function (req, res, next) {
//     res.json({});
//   });

// listen on port of preference(?) if running locally, i'll probably need different ports for different services or perhaps just different paths?
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});