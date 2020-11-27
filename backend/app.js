/**
 * Express App for Hatchways API Assessment
 */

const express = require('express');
const ExpressError = require('./helpers/expressError');

const routes = require('./routes');
const morgan = require('morgan');

const app = express();

/** Middleware */
app.use(express.json());

app.use(morgan('tiny'));
app.use('/api', routes);

/** 404 handler */
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;