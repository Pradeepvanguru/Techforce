const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    contentType: {
        type: String,
        required: true,
    },
    data: {
        type: Object,  // Stores the actual content data as an object
        required: true,
    },
    fetchedAt: {
        type: Date,
        default: Date.now,  // Timestamp for when the data was fetched
    },
});

module.exports = mongoose.model('Content', contentSchema);
