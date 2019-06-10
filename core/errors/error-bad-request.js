'use strict';

const {BAD_REQUEST} = require('./response/statuses');

/**
 * @type {ErrorGeneric}
 * */
const ErrorGeneric = require('./error-generic');

class ErrorBadRequest extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 400 (Bad Request) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Bad Request') {
    super(message, BAD_REQUEST);
  }
}

module.exports = ErrorBadRequest;
