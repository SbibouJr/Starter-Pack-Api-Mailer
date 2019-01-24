const { forEach } = require('lodash');
const router = require('express').Router();

const routes = require('./routes');

routes.forEach((route) => {
  forEach(route.methods, (method, index) => {
    router.route(route.path)[index](method);
  });
});

module.exports = router;
