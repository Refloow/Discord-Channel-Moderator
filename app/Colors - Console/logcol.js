// Colors

const winston = require('winston');
const level ={
  error: 0,
  correct: 1,
  fail: 2,
  new: 3,
  info: 4,
  give: 5,
  receive: 6
};
const colors = {
    error: 'bold red',
    correct: 'bold green',
    fail: 'red',
    new: 'underline green',
    info: 'yellow',
    give: 'underline red',
    receive: 'underline green'};

winston.addColors(colors);
const logger = module.exports = winston.createLogger({
  levels: level,
  format: winston.format.combine(
    winston.format.colorize({message: true}),
    winston.format.timestamp({
      format: 'HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console()
  ],
  level: 'info'
});
