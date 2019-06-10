'use strict';

const {
  sequelize,
  users: UsersModel,
  connections: ConnectionsModel
} = require('../models');

const MIN_CONNECTIONS_PER_USER = 0;
const MAX_CONNECTIONS_PER_USER = 50;

/**
 * Cleanup database
 */
const cleanDB = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.query('TRUNCATE connections');
  await sequelize.query('truncate users');
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
};

/**
 * @param {Number} count
 * */
const generateUsers = async (usersCount) => {
  for (let i=0; i<usersCount; ++i) {
    const user = await UsersModel.create({
      firstname: random(),
      lastname: random(),
      color: randomColor()
    });
  }
};

/**
 * Generate connections
 * */
const generateConnections = async () => {
  const users = await UsersModel.findAll();

  users.forEach(async (user) => {
    const connectedUsersIds = await getRandomnUsersIds(user.id);

    connectedUsersIds.forEach(async (connectedUser) => {
      const connection = await ConnectionsModel.create({
        user_one_id: user.id,
        user_two_id: connectedUser.id,
        action_user_id: user.id
      });
    });
  });
};

/**
 * @param {Number} excludeId
 * @return {Number[]} random list of users IDs
 * */
const getRandomnUsersIds = (excludeId) => {
  const limit = getRandomInt();

  const query = `
    SELECT id
    FROM users
    WHERE id != :excludeId
    ORDER BY RAND()
    LIMIT :limit`;

  return sequelize.query(query, {
    replacements: {limit, excludeId},
    type: sequelize.QueryTypes.SELECT
  });
};

/**
 * @return {String} random color
 * */
const randomColor = () => Math.random().toString(16).slice(2, 8).toUpperCase();

/**
 * @return {String} random
 * */
const random = () => Math.random().toString().slice(2);

/**
 * @return {Number} random int
 * */
const getRandomInt = () => {
  const min = Math.ceil(MIN_CONNECTIONS_PER_USER);
  const max = Math.floor(MAX_CONNECTIONS_PER_USER);
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = {cleanDB, createUsers: generateUsers, generateConnections};