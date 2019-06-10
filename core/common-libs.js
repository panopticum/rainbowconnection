'use strict';

const {ErrorBadRequest} = require('./errors');

/**
 * Will validate and return value for given param on success, throw error if validation fails
 * @param {Object} source
 * @param {String} param
 * @param {String} errMessage
 * @return {Number}
 */
const getValidateInt = (source, param, errMessage) => {
  const value = +source[param];

  if (Number.isNaN(value) || value < 1) {
    throw new ErrorBadRequest(errMessage);
  }

  return value;
};

module.exports = {getValidateInt};