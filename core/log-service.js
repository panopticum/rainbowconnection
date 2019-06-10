'use strict';

const path = require('path');
const fs = require('fs');
const log4js = require('log4js');
const config = require('../config');

const logConfig = {
  disableClustering: false,
  appenders: {
    out: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'all'
    }
  }
};

if (fs.existsSync(config.logDir)) {
  const filename = path.join(config.logDir, config.logFile);

  logConfig.appenders.file = {
    type: 'fileSync',
    filename: filename,
    maxLogSize: config.logSize,
    backups: 0,
    layout: {
      type: 'json'
    }
  };
} else {
  console.log(`WARNING! Directory '${config.logDir}' doesn't exists`);
}

log4js.addLayout('json', () => (logEvent) => JSON.stringify(logEvent));
log4js.configure(logConfig);

class LogService {
  constructor() {
    this.logger = log4js.getLogger('default');
  }

  info(msg) {
    this.logger.info(msg);
  }

  error(msg) {
    this.logger.error(msg);
  }

  debug(msg) {
    this.logger.debug(msg);
  }

  fatal(msg) {
    this.logger.fatal(msg);
  }
}

module.exports = new LogService();