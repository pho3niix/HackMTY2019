const triviappModel = require('../models/triviappDB');

const triviaControl = {};

triviaControl.test = (req, res)=>{
    res.send('hola desde controladores');
}

// insertar nueva trivia
triviaControl.newTrivia = (req, res)=>{

    const newQuestion = new triviappModel(
        {
            question: req.body.question,
            optiona: req.body.optiona,
            optionb: req.body.optionb,
            optionc: req.body.optionc,
            optiond: req.body.optiond
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
};

/**Mostrar registros de trivias */
triviaControl.getTrivias = (req, res)=>{
    triviappModel.find({}).sort({_id:-1}).exec(
        (err, triviapp)=>{
            if(err){
                res.send(err);
            }else{
                res.send(triviapp)
            }
        }
    );
};

// Actualizar trivias por ID
triviaControl.upTrivias = (req, res)=>{
    const updateTrivia = {
        question: req.body.question,
        optiona: req.body.optiona,
        optionb: req.body.optionb,
        optionc: req.body.optionc,
        optiond: req.body.optiond
    };

    triviappModel.updateOne(
        {
            _id: req.body.id
        },
        updateTrivia, (err, triviapp)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'could not update'
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully updated'
                    }
                );
            }
        }
    );
}

triviaControl.deleteTrivia = (req, res)=>{
    triviappModel.deleteOne(
        {
            _id: req.params.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'could not delete'
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully'
                    }
                )
            }
        }
    )
};

module.exports = triviaControl;