const mongoose = require('mongoose');

const uiLayoutSchema = new mongoose.Schema({
    pageType: {
        type: String,
        required: true, // e.g., 'HomePage', 'AboutUs', 'Services', 'Blog'
    },
    layoutJSON: {
        type: Object, // Stores the layout as a JSON object
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('UILayout', uiLayoutSchema);
