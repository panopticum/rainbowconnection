'use strict';

const {FORBIDDEN} = require('./response/statuses');

/**
 * @type {ErrorGeneric}
 * */
const ErrorGeneric = require('./error-generic');

class ErrorForbidden extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 403 (Forbidden) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Operation not permitted') {
    super(message, FORBIDDEN);
  }
}

module.exports = ErrorForbidden;
