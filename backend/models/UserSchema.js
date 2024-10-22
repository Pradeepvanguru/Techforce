const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'editor'], // Different roles can access different parts of the UI Builder
        default: 'editor',
    },
    savedLayouts: [
        {
            layoutName: String,
            layoutJSON: Object,
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);