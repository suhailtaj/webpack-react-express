'use strict';

const express = require('express');
const router = express.Router();

router.get('/goto/:siteUrl', function (req, res) {
    res.redirect('http://' + req.params.siteUrl + '.com');
});

module.exports = router;
