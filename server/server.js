var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var port = process.env.PORT || 3004;
const router = require('./routes/pet.router');
const pool = require('./modules/pool.js')
app.use(bodyParser.json());

app.use('/dash', router);


// Serve static files
app.use(express.static('server/public'));

app.listen(port, () => {
  console.log('Listening on port', port);
});