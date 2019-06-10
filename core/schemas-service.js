'use strict';

const {ErrorValidationError} = require('./errors/index');
const Ajv = require('ajv');

class SchemasService {
  constructor() {
    this.ajv = Ajv({
      allErrors: true,
      removeAdditional: 'all'
    });
  }

  /**
   * Validates given data against provided JSON schema
   * @param {object|string} schema
   * @param {*} data
   * @return {boolean} True on success, False otherwise
   */
  validate (schema, data) {
    if (!this.isValid(schema, data)) {
      throw new ErrorValidationError(undefined, this.getFormattedErrors());
    }
  }

  /**
   * Validates given data against provided JSON schema
   * @param {object|string} schema
   * @param {*} data
   * @return {boolean} True on success, False otherwise
   */
  isValid (schema, data) {
    return this.ajv.validate(schema, data);
  }

  /**
   * Returns an array of errors for the last failed validation
   * @return {object[]}
   */
  getFormattedErrors () {
    return this.parseSchemaErrors(this.ajv.errors);
  }

  /**
   * @param {object[]} schemaErrors
   * @return {*}
   */
  parseSchemaErrors (schemaErrors) {
    if (schemaErrors === null) {
      return [];
    }

    return schemaErrors.map(err => ({
      field: err.dataPath,
      message: err.message
    }));
  }
}

module.exports = new SchemasService();