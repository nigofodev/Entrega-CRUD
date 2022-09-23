const express = require('express');

const booksRouters = require('./books.routers');
const buyersRouter = require('./buyers.router');
const pointsofsaleRouter = require('./pointsofsale.router');


function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/books', booksRouters);
  router.use('/buyers', buyersRouter);
  router.use('/pointsofsale', pointsofsaleRouter);
};

module.exports = routerApi;