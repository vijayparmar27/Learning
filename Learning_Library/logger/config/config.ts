const { transports } = require('winston');
import level from './level';
import format from './format';

/**
 * config for production
 */
const config = {
  level,
  format,
  transports: [new transports.Console({ level: 'debug' })],
};

export = config;
