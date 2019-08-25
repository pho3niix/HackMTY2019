const mongoose = require('mongoose');
const { Schema } = mongoose;

var collectionName = 'triviapp';

const TriviappSchema = new Schema(
    {
        question: {
            type: String
        },
        answers:
            {
                optionA: String,
                optionB: String,
                optionC: String,
                optionD: String
            }
    },
    {
        collection: collectionName
    },
    {
        versionKey: false
    }
);

const Triviapp = mongoose.model(collectionName, TriviappSchema);

module.exports = Triviapp;