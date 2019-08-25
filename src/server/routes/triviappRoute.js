const express = require('express');
const router = express.Router();
const controls = require('../controllers/triviappControllers');

/**Crud Routes */
router.post('/newTrivia', controls.newTrivia);

module.exports = router;