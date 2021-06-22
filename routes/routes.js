const express = require('express');
const router = express.Router();
const api = require('../controllers/api');

/* routes */

router.get('/api/items', api.search);
router.get('/api/v1/items/:id', api.itemId);

module.exports = {
    router
}