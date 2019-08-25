const express = require('express');
const router = express.Router();
const questionControl = require('../controllers/questionsControllers');

/**Crud Routes */
router.post('/newQuestion', questionControl.newQuestion);
router.get('/getQuestion', questionControl.getQuestion);
router.put('/upQuestion', questionControl.upQuestion);
router.delete('/delQuestion/:id', questionControl.deleteQuestion);

module.exports = router;