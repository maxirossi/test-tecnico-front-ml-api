const express = require('express');
const router = express.Router();
const api = require('../controllers/api');

/* routes */

router.get('/api/items', api.search);

module.exports = {
    router
}