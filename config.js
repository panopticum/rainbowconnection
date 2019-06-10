module.exports = {
  port: process.env.RAINBOW_PORT || 80,
  parallelWorkers: process.env.RAINBOW_PARALLEL_WORKERS,
  timeout: process.env.RAINBOW_TIMEOUT || 999999000,
  logDir: process.env.RAINBOW_LOG_DIR || 'logs',
  logFile: process.env.RAINBOW_LOG_FILENAME || 'application.log',
  logSize: process.env.RAINBOW_LOG_SIZE || 10485760, // 10MB
  dbUsername: process.env.RAINBOW_DB_USERNAME || 'root',
  dbPassword: process.env.RAINBOW_DB_PASSWORD || 'root',
  dbName: process.env.RAINBOW_DB_NAME || 'rainbowconnection',
  dbHost: process.env.RAINBOW_DB_HOST || '127.0.0.1'
};