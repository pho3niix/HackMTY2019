const triviappModel = require('../models/triviappDB');

const controls = {};

controls.test = (req, res)=>{
    res.send('hola desde controladores');
}

controls.newTrivia = (req, res)=>{

    // var optionA = ;

    // var optionB = ;
    
    // var optionC = ;

    // var optionD = ;

    const newQuestion = new triviappModel(
        {
            question: req.body.question,
            answers:[
                {
                    optionA: req.body.optionA,
                    optionB: req.body.optionB,
                    optionC: req.body.optionC,
                    optionD: req.body.optionD
                }
            ]
                
        }
    );
    newQuestion.save(
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
                res.status(200).json(
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

module.exports = controls;