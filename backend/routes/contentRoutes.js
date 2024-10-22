const express = require('express');
const { getContent, getUILayout } = require('../controllers/contentController');

const router = express.Router();

// Route to fetch content by content type
router.get('/:contentType', getContent);

// Route to fetch UI layout
router.get('/ui/layout', getUILayout);

module.exports = router;
