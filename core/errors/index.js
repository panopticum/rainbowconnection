'use strict';

const ErrorBadRequest = require('./error-bad-request');
const ErrorForbidden = require('./error-forbidden');
const ErrorNotFound = require('./error-not-found');
const ErrorServerError = require('./error-server-error');
const ErrorValidationError = require('./error-validation-error');
const ErrorUnauthorized = require('./error-unauthorized');
const ErrorConflict = require('./error-conflict');

module.exports = {
  ErrorBadRequest: ErrorBadRequest,
  ErrorForbidden: ErrorForbidden,
  ErrorNotFound: ErrorNotFound,
  ErrorServerError: ErrorServerError,
  ErrorValidationError: ErrorValidationError,
  ErrorUnauthorized: ErrorUnauthorized,
  ErrorConflict: ErrorConflict
};
