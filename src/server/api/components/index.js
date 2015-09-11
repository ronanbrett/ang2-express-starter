'use strict';

var express = require('express');
var controller = require('./components.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/import', controller.import);

module.exports = router;
