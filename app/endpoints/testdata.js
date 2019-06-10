'use strict';

const express = require('express');
const router = express.Router();

const testDataSchema = require('../schemas/testdata');
const schemaService = require('../../core/schemas-service');

const {
  cleanDB,
  createUsers,
  generateConnections
} = require('../controllers/testdata');

/**
 * @api {post} /testdata Populate the testData
 * @apiDescription Populate the testData
 *
 * @apiName PostTestData
 * @apiGroup TestData
 * @apiVersion 1.0.0
 *
 * @apiUse RequestHeadersResource
 * @apiUse ResponseHeaders
 *
 * @apiParam (Parameters - Body)  {Number}  userCount    The count of populate user
 *
 * @apiParamExample {json} Input
 *    {
 *        "userCount": 100
 *    }
 *
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *       "ok": true
 *    }
 *
 * @apiUse CommonErrors
 *
 * */
router.post('/testdata', async (req, res, next) => {
  try {
    schemaService.validate(testDataSchema, req.body);

    const {userCount} = req.body;

    await cleanDB();
    await createUsers(userCount);
    await generateConnections();

    res.send({'ok': true});

  } catch (e) {
    next(e);
  }
});

module.exports = router;