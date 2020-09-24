/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import http from 'http';
import chalk from 'chalk';
import router from './routes/index';
import '@babel/polyfill';

const app = express();
const server = http.createServer(app);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = res.send({
    message: 'Something went wrong. Be assured we\'re working on it!',
  });
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});
server.listen(process.env.PORT, () => {
  console.log(chalk.yellow(`App is Live on Port: ${process.env.PORT}`));
});
