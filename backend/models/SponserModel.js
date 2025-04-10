const mongoose = require('mongoose');

const sponserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    about: {
        type: String,
        required: true, 
    },
    country: { 
        type: String,
        required: true, 
    },
    city: {
        type: String,
        required: true, 
    },
    imgUrl: {
        public_id: {
            type: String, 
            required: true, 
        },
        url: {
            type: String, 
            required: true, 
        },
    },
    images:[
        {
            Url:{
                type: String,
            }
        }
    ]
}, { timestamps: true });

const SponserModel = mongoose.model('Sponser', sponserSchema);

module.exports = SponserModel;