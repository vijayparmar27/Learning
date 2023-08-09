const {
  format: { printf, timestamp, combine, colorize },
} = require('winston');
import moment from "moment-timezone";

const logFormat = printf(
  // ({ level, message, timestamp: ts }: any) => `${ts} [${level}]: ${message}`,
  ({ level, message, timestamp: ts }: any) => `[${moment(new Date()).tz("Asia/Kolkata").format("DD-MM-YYYY hh:mm:ss A")}] [${level}]: ${message}`,
);

export = combine(timestamp(), colorize({ all: true }), logFormat);
