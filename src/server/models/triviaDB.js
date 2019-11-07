const mongoose = require('mongoose');
const { Schema } = mongoose;
// const questions = mongoose.model('questions');

var collectionName = 'triviapp';

const triviappSchema = new Schema(
    {
        name: String,
        questions: {
            type: Schema.Types.ObjectId,
            ref: 'questions'
        }
    },
);

const triviapp = mongoose.model(collectionName, triviappSchema)

module.exports = triviapp;