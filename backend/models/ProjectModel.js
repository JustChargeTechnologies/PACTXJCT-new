const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        required: true, 
        type: String,
    },
    description: {
        type: String,
        required: true, 
    },
    aboutProject: {
        type: String,
        required: true, 
    },
    projectUrl: {
        public_id: String,
        url: String,
    }
}, { timestamps: true });

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;