'use strict';

const {INT_SERVER_ERROR} = require('./response/statuses');

class ErrorGeneric extends Error {
  /**
   * A class constructor
   * @param {string} message A human-readable description of the error
   * @param {number} code Response status code
   */
  constructor (message, code = INT_SERVER_ERROR) {
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorGeneric);
    }

    this.message = message;
    this.code = code;
  }
}

module.exports = ErrorGeneric;
