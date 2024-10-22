const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    pageType: {
        type: String,
        required: true,
        unique: true, // Each page type can have its own content
    },
    contentFields: {
        type: Object, // This will store all the data related to the page (e.g., text, images, etc.)
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

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
