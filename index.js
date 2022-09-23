const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require ('mongoose');
const log = require ('./lib/log-message');
const routerApi = require('./routes');
const responseMessage = require('./lib/response-message');

const port = process.env.PORT || 4005;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

mongoose
.connect(process.env.MONGO_URI)
.then(()=> log.logMessage("Connection succesfully to the DB"));


routerApi(app);

app.all('*', (req, res) => {
  responseMessage( res, 400, "Bad request");
});


{
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`The application is running at: http://127.0.0.1: ${port}`);
  });
}
