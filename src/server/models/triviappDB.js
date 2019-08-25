const mongoose = require('mongoose');
const { Schema } = mongoose;

var collectionName = 'triviapp';

const TriviappSchema = new Schema(
    {
        question: {
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

const Triviapp = mongoose.model(collectionName, TriviappSchema);

module.exports = Triviapp;