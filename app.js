'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logService = require('./core/log-service');
const {ErrorNotFound, ErrorBadRequest} = require('./core/errors');
const routes = require('./app/endpoints');

const app = express();

// Set CORS headers to all responses
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Expose-Headers', 'Authorization');
  next();
});

// Set security headers
app.use(helmet({
  noCache: true
}));

app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

// Catch thrown but uncaught exceptions and log'em nicely
process.on('uncaughtException', err => {
  logService.fatal({
    message: err.message,
    stack: err.stack
  });
});

// Log any unhandled promise rejections
process.on('unhandledRejection', err => {
  logService.fatal({
    message: err.message,
    stack: err.stack
  });
});

// Set up middleware
require('./core/middlewares')(app);

// Check content type for post and put ('application/json')
app.use((req, res, next) => {
  const methods = ['PUT', 'POST', 'PATCH'];

  if (methods.includes(req.method) && !req.is('application/json')) {
    return next(new ErrorBadRequest('Incorrect content type'));
  }

  next();
});

// URL path for endpoints
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new ErrorNotFound());
});

// Error handler
app.use(async (err, req, res, next) => {
  if (err.code === undefined || (err && isNaN(err.code))) {
    err.code = 500;
  }

  if (err.code >= 400 && err.code < 500) {
    if (!err.stack && Array.isArray(err.errors)) {
      err.stack = err.errors;
    }
    logService.info(err);
  } else if (err.code >= 500) {
    logService.error(err);
  }

  if (err.message === undefined || err.code === 500) {
    err.message = 'Internal server error';
  }

  const obj = {
    message: err.message
  };

  if (err.errors) {
    obj.errors = err.errors;
  }
  if (err.additionalInfo) {
    obj.additionalInfo = err.additionalInfo;
  }

  res.status(err.code).json(obj);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
