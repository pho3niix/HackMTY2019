const express = require('express');
const router = express.Router();
const triviaControl = require('../controllers/triviappControllers');

/**Crud Routes */
router.post('/newTrivia', triviaControl.newTrivia);
router.get('/getTrivias', triviaControl.getTrivias);
router.put('/upTrivia', triviaControl.upTrivias);
router.delete('/delTrivia/:id', triviaControl.deleteTrivia);

module.exports = router;