const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    label: {                             
        type: String,
        required: true
    },
    description: {                             
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Todo", todoSchema);