'use strict';

const {users: UsersModel, sequelize} = require('../models');
const {ErrorNotFound} = require('../../core/errors');

/**
 * Properties allowed to display
 * */
const PUBLIC_PROPERTIES = [
  'id',
  'firstname',
  'lastname',
  'color'
];

/**
 * the User
 * @typedef {Object} User
 * @property {Number} id
 * @property {String} firstname
 * @property {String} lastname
 * @property {String} color
 * @property {User[]} connections list
 */

/**
 * @param {Number} id
 * @return {User}
 * */
const getUserById = async (id) => {
  const [user, connections] = await Promise.all([
    UsersModel.findOne({ where: {id}, attributes: PUBLIC_PROPERTIES }),
    getConnections(id)
  ]);

  if (!user) {
    throw new ErrorNotFound('User doesn\'t exists');
  }

  return {...user.dataValues, connections};
};

/**
 * @param {Number} id
 * @return {User[]} connections list
 * */
const getConnections = (id) => {
  const query = `SELECT u.*
    FROM connections
    INNER JOIN users u ON connections.user_two_id = u.id
    WHERE user_one_id = :id
    UNION SELECT u.*
    FROM connections
    INNER JOIN users u ON connections.user_one_id = u.id
    WHERE user_two_id = :id`;

  return sequelize.query(query, {
    replacements: {id},
    type: sequelize.QueryTypes.SELECT
  });
};

module.exports = {getUserById};