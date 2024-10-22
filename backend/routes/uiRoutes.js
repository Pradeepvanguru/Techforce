const express = require('express');
const router = express.Router();
const uiController = require('../controllers/uiController');

// Route to get UI layout for a specific page
router.get('/:pageType', uiController.getUILayout);

// Route to save (create or update) a UI layout
router.post('/', uiController.saveUILayout);

// Route to delete a UI layout
router.delete('/:pageType', uiController.deleteUILayout);

module.exports = router;
