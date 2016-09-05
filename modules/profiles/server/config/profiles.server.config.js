'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  passport = require('passport'),
  config = require(path.resolve('./config/config'));

/**
 * Module init function.
 */
module.exports = function (app, db) {
  // Initialize strategies
  config.utils.getGlobbedPaths(path.join(__dirname, './strategies/**/*.js')).forEach(function (strategy) {
    require(path.resolve(strategy))(config);
  });

  // Add passport's middleware
  app.use(passport.initialize());
  app.use(passport.session());
};
