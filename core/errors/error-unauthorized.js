'use strict';

const {UNAUTHORIZED} = require('./response/statuses');

/**
 * @typ[e {ErrorGeneric}
 * */
const ErrorGeneric = require('./error-generic');

class ErrorUnauthorized extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 401 (Unauthorized) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Request is unauthorized') {
    super(message, UNAUTHORIZED);
  }
}

module.exports = ErrorUnauthorized;
