'use strict';

/**
 * A 200 response code is most commonly used in response to a GET request to indicate that the request was successful
 * and the result is contained in the response body.
 * @type {number}
 */
const OK = 200;

/**
 * This 201 HTTP status code indicates that a POST or PUT resulted in the creation of a resource and the body of the
 * response contains information about the newly created resource.
 * @type {number}
 */
const OK_CREATED = 201;

/**
 * This 204 HTTP status code indicates that a HEAD, OPTIONS, PUT or DELETE request has succeeded without further comment.
 * @type {number}
 */
const OK_NO_CONTENT = 204;

/**
 * This 304 HTTP status code represents a GET request with conditional modification headers, but the resource
 * has not been modified. No body should therefore accompany this response.
 * @type {number}
 */
const NOT_MODIFIED = 304;

/**
 * A 400 error indicates that the client made a request that the server simply couldn't understand. There's no point
 * in repeating the request, because the request itself is flawed. I often use this error to indicate problems with
 * the syntax or schema of the client’s XML or JSON bodies or the request parameters.
 * @type {number}
 */
const BAD_REQUEST = 400;

/**
 * An API server will respond with a 401 error when the client requests a protected resource without having
 * authenticated or when the authentication credentials fail. You get bonus points for including a body that describes
 * your authentication protocol.
 * @type {number}
 */
const UNAUTHORIZED = 401;

/**
 * A 403 error code indicates that although you are successfully authenticated, you do not have access to perform
 * the operation you just attempted.
 * @type {number}
 */
const FORBIDDEN = 403;

/**
 * When a client tries to perform an operation on a resource that doesn't exist, the API server should respond
 * with a 404 error code.
 * @type {number}
 */
const NOT_FOUND = 404;

/**
 * This 422 HTTP status code indicates that a validation has failed. The request and the format is valid, however
 * the request was unable to process. For instance when sent data does not pass validation tests.
 * @type {number}
 */
const UNPROCESSABLE_ENTITY = 422;

/**
 * The HTTP 409 Conflict response status code indicates a request conflict with current state of the server.
 * */
const CONFLICT = 409;

/**
 * The 500 error is the quintessential bug on the server error. It represents some kind of failure
 * of the server to function as designed and thus it cannot handle the request.
 * API developers should avoid this error. If an error occurs in the global catch blog,
 * the stacktrace should be logged and not returned as response.
 * @type {number}
 */
const INT_SERVER_ERROR = 500;

module.exports = Object.freeze({
  OK: OK,
  OK_CREATED: OK_CREATED,
  OK_NO_CONTENT: OK_NO_CONTENT,
  NOT_MODIFIED: NOT_MODIFIED,
  BAD_REQUEST: BAD_REQUEST,
  UNAUTHORIZED: UNAUTHORIZED,
  FORBIDDEN: FORBIDDEN,
  NOT_FOUND: NOT_FOUND,
  UNPROCESSABLE_ENTITY: UNPROCESSABLE_ENTITY,
  CONFLICT: CONFLICT,
  INT_SERVER_ERROR: INT_SERVER_ERROR
});
