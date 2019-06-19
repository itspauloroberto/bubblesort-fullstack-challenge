const port = 3001;
const express = require('express');
const app = express();
const { bubbleSort } = require('./src/helpers/functions');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.post('/', (req, res) => res.send(req.body.array ? bubbleSort(req.body.array) : 'Invalid array format.'));
app.listen(port, () => console.log(`BubbleSort Awesome API is running on port ${port}!`));