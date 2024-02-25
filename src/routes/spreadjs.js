const express = require('express');
const { getCommands } = require('../services/state-keeper');
const { getWorkbook } = require('../spreadjs/initSpread');
let router = express.Router();

router.get('/getCommands', function (req, res) {
    res.send(getCommands());
});

router.get('/getWorkbook', function (req, res) {
    res.send(getWorkbook());
});

module.exports = router;