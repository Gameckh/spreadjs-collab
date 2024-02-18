const express = require('express');
const { getCommands } = require('../services/state-keeper');
let router = express.Router();

router.get('/getCommands', function (req, res) {
    res.send(getCommands());
});

module.exports = router;