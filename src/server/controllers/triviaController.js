const triviappModel = require('../models/triviaDB');

const triviaControl = {};

triviaControl.newTrivia = (req, res)=>{

    const newTrivia = new triviappModel(
        {
            name: req.body.name,
            questions: req.body.questions
        }
    );
    newTrivia.save(
        (err, triviapp)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Could not save new question',
                        err
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully save new question',
                        triviapp

                    }
                )
            }
        }
    );
}

triviaControl.getTrivia = (req, res)=>{
    triviappModel.find({}).sort({_id:-1}).populate('questions').exec(
        (err, trivia)=>{
            if(err){
                res.send(err);
            }else{
                res.send(trivia)
            }
        }
    )
};

module.exports = triviaControl;