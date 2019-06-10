'use strict';

const {CONFLICT} = require('./response/statuses');

/**
 * @type {ErrorGeneric}
 * */
const ErrorGeneric = require('./error-generic');

class ErrorConflict extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 409 (Conflict) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Conflict') {
    super(message, CONFLICT);
  }
}

module.exports = ErrorConflict;
