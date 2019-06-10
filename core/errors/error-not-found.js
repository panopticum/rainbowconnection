'use strict';

const {NOT_FOUND} = require('./response/statuses');

/**
 * @type {ErrorGeneric}
 * */
const ErrorGeneric = require('./error-generic');

class ErrorNotFound extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 404 (Not Found) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Resource not found') {
    super(message, NOT_FOUND);
  }
}

module.exports = ErrorNotFound;
