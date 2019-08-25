const mongoose = require('mongoose');
const { Schema } = mongoose;

var collectionName = 'questions';

const answerSchema = new Schema(
    {
        question:{
            type: String
        },
        optiona:{
            type: String
        },
        optionb:{
            type: String
        },
        optionc:{
            type: String
        },
        optiond:{
            type: String
        }
    },
    {
        collection: collectionName
    },
    {
        versionKey: false
    }
);

const answer = mongoose.model(collectionName, answerSchema);

module.exports = answer;