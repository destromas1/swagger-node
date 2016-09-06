'use strict';

var util = require('util');

module.exports = {
  getAll: get
};

function get(req, res) {
  // this sends back a JSON response which is a single string
  res.json({products : []});
}
