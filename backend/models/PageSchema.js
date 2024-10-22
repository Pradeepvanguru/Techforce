const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    pageType: {
        type: String,
        required: true, // e.g., 'HomePage', 'AboutUs'
    },
    content: {
        type: Object, // Content from Contentstack
        required: true,
    },
    layout: {
        type: Object, // Layout in JSON format
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Page', pageSchema);
