const express = require('express');
const { getCommands } = require('../services/state-keeper');
const { getWorkbook } = require('../spreadjs_playwright/initSpread');
let router = express.Router();

router.get('/getCommands', function (req, res) {
    res.send(getCommands());
});

router.get('/getWorkbook', async function (req, res) {
    res.send(await getWorkbook());
});

module.exports = router;