'use strict';

const fs = require('fs');
const express = require('express');
const routes = express.Router();

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => routes.use(require(`./${file}`)));

module.exports = routes;

/**
 * @apiDefine RequestHeadersAuthenticate
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader (Request Headers) {String} Authorization User credentials using [Basic schema](https://tools.ietf.org/html/rfc7617)
 * @apiHeaderExample {json} Request Header
 *   {
 *     "Authorization": "Basic %Base64_Encoded_Credentials%"
 *   }
 */

/**
 * @apiDefine RequestHeadersResource
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader (Request Headers) {String} Authorization User signed [JSON Web Token](https://jwt.io/introduction/) using the [Bearer schema](https://tools.ietf.org/html/rfc6750)
 * @apiHeaderExample {json} Request Header
 *   {
 *     "Authorization": "Bearer %Signed_JWT_String%"
 *   }
 */

/**
 * @apiDefine descriptionCreate
 *
 * @apiVersion 1.0.0
 *
 * @apiDescription Will context a new resource based off of provided data.
 * Will respond with the newly created resource in the body and `201 Created` status on success.
 * Also the `Location` response header may be present pointing to the URI of the new resource.
 */

/**
 * @apiDefine descriptionDelete
 *
 * @apiVersion 1.0.0
 *
 * @apiDescription Will delete a resource by provided `id` if the authorized user has enough permissions.
 * Will respond with an empty body and `204 No Content` status on success.
 */

/**
 * @apiDefine ResponseHeaders
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader (Response Headers) {String} Authorization User signed [JSON Web Token](https://jwt.io/introduction/) using the [Bearer schema](https://tools.ietf.org/html/rfc6750)
 */

/**
 * @apiDefine ErrorAuthorizationIncorrect
 *
 * @apiVersion 1.0.0
 *
 * @apiError AuthorizationIncorrect The Authorization header not provided
 * @apiErrorExample {json} AuthorizationIncorrect
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "message": "Invalid credentials"
 *   }
 */

/**
 * @apiDefine ErrorCredentialsIncorrect
 *
 * @apiVersion 1.0.0
 *
 * @apiError CredentialsIncorrect The Bearer authorization schema malformed
 * @apiErrorExample {json} CredentialsIncorrect
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "message": "Invalid credentials"
 *   }
 */

/**
 * @apiDefine ErrorAuthorizationFailure
 *
 * @apiVersion 1.0.0
 *
 * @apiError AuthorizationFailure User authorization failed
 * @apiErrorExample {json} AuthorizationFailure
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "message": "User is not authorized"
 *   }
 */

/**
 * @apiDefine CommonErrors
 *
 * @apiVersion 1.0.0
 *
 * @apiError AuthorizationIncorrect The Authorization header not provided
 * @apiErrorExample {json} AuthorizationIncorrect
 *     HTTP/1.1 401 Unauthorized
 *     {
 *         "message": "Invalid credentials"
 *     }
 *
 * @apiError CredentialsIncorrect The Bearer authorization schema malformed
 * @apiErrorExample {json} CredentialsIncorrect
 *     HTTP/1.1 401 Unauthorized
 *     {
 *         "message": "Invalid credentials"
 *     }
 *
 * @apiError AuthorizationFailure User authorization failed
 * @apiErrorExample {json} AuthorizationFailure
 *     HTTP/1.1 401 Unauthorized
 *     {
 *         "message": "User is not authorized"
 *     }
 */