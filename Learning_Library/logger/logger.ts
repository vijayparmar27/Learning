const { createLogger } = require('winston');
import config from './config/config';
import level from './config/level';
import { formatLogMessages } from './helper';

const winston = createLogger(config);

/**
 *
 * formats and logs message
 * @param {Number} type
 * @param  {...any} messages
 */
const logger = (type:any, ...messages:any) => {
  const message = formatLogMessages(messages);
  
  switch (type) {
    case level.warn:
      winston.warn(message);
      break;

    case level.info:
      winston.info(message);
      break;

    case level.debug:
      winston.debug(message);
      break;

    case level.error:
      winston.error(message);
      break;

    // can throw error here TBD
    default:
      break;
  }

  return { type, message };
};

export = logger;
