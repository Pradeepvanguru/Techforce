const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Component name, e.g., 'TextBlock', 'Image', 'Button'
    },
    properties: {
        type: Object, // Stores the properties like color, size, etc.
        required: true,
    },
    category: {
        type: String, // e.g., 'Layout', 'Text', 'Media'
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Component', componentSchema);
