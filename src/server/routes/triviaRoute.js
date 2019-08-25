const express = require('express');
const router = express.Router();
const triviappControl = require('../controllers/triviaController');

/**Crud Router */
router.post('/newTrivia', triviappControl.newTrivia);
router.get('/getTrivia', triviappControl.getTrivia);

module.exports = router;