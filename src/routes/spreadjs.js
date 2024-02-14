const express = require('express');
const { getWorkbook } = require('../services/state-keeper');
let router = express.Router();

router.get('/getWorkbook', function (req, res) {
    res.send(JSON.stringify(getWorkbook()));
});

module.exports = router;