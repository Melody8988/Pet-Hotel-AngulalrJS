var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var port = process.env.PORT || 3004;
const petRouter = require('./routes/dash.router');
const ownerRouter = require('./routes/owner.router');
const pool = require('./modules/pool.js')
app.use(bodyParser.json());

app.use('/dash', petRouter);
app.use('/owners', ownerRouter);



// Serve static files
app.use(express.static('server/public'));

app.listen(port, () => {
  console.log('Listening on port', port);
});