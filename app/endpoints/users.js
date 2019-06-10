'use strict';

const express = require('express');
const router = express.Router();

const {getUserById} = require('../controllers/users');
const {getValidateInt} = require('../../core/common-libs');

/**
 * @api {get} /users/:id Read the user
 * @apiDescription Read the user
 *
 * @apiName ReadUser
 * @apiGroup ReadUser
 * @apiVersion 1.0.0
 *
 * @apiUse RequestHeadersResource
 * @apiUse ResponseHeaders
 *
 * @apiParam (Parameters - Path)  {Number}  id    The user id
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *        "id": 17,
 *        "firstname": "11554167156112793",
 *        "lastname": "8028178653376414",
 *        "color": "7B800B",
 *        "connections": [{
 *            "id": 57,
 *            "firstname": "4647666236598096",
 *            "lastname": "025005216926012874",
 *            "color": "A46F91"
 *        },{
 *            "id": 71,
 *            "firstname": "48120272300719025",
 *            "lastname": "46219307492852213",
 *            "color": "0EA331"
 *        }]
 *    }
 *
 * @apiUse CommonErrors
 *
 * */
router.get('/users/:id', async (req, res, next) => {
  try {
    const id = getValidateInt(req.params, 'id', 'Invalid user id');
    const user = await getUserById(id);

    res.send(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;