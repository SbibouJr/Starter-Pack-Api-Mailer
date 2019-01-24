const express = require('express')();
const bodyParser = require('body-parser');

const { config } = require('./../../config/app.js');
const router = require('./../router');

const app = {
  start: () => {
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: false }));
    // express.use((req, res, next) => {
    //   config.setHeader(res);
    //   next();
    // });
    // express.options('/*', (req, res) => {
    //   config.setHeader(res);
    //   res.sendStatus(200);
    // });
    // express.use(config.isAuthorized);
    express.use(router);

    const server = express.listen(config.port, config.hostname, () => {
      console.info(`*****     Server start: http://${config.hostname}:${config.port}     *****`); // eslint-disable-line no-console
    });
    return server;
  },
};


module.exports = app;
