const mongoose = require('mongoose');
const { Schema } = mongoose;

var collectionName = 'triviapp';

const TriviappSchema = new Schema(
    {
        question: {
            type: String
        },
        answers:[
            {
                optionA: [
                    {
                        status: Boolean,
                        text: String
                    }
                ],
                optionB: [
                    {
                        status: Boolean,
                        text: String
                    }
                ],
                optionC: [
                    {
                        status: Boolean,
                        text: String
                    }
                ],
                optionD: [
                    {
                        status: Boolean,
                        text: String
                    }
                ],
            }   
        ]
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