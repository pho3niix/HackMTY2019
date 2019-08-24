const usersSchema = require('../models/usersSchema');

var usersController = {};

usersController.greet = (req, res)=>{
    res.send("hola desde controladores");
};

/** Insertar nuevo registro */
usersController.newUser = (req, res)=>{
    const newCharacther = new usersSchema(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    );
    newCharacther.save(
        (err, Project)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Could not save new characther',
                        err
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully save new project',
                        Project
                    }
                );
            }
        }
    );
};

/** Mostrar registros almacenados en la base de datos */
usersController.listUser = (req, res)=>{
    usersSchema.find({}).sort({_id: -1}).exec((err, Projects)=>{// sort sirve para traer los ultimos registros insertados
        if(err){
            res.send(err);
        }else{
            res.send(Projects);
        }
    });
};

/** Actulizar registros por ID*/
usersController.updateUser = (req, res)=>{
    const updateWorld = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    usersSchema.updateOne(
        {
            id: req.body.id
        },
        updateWorld, (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not update"
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        status: true,
                        message: "Successfully updated"
                    }
                );
            }
        }
    );
};

/** Borrar registro por ID en la base de datos */
usersController.deleteUser = (req, res)=>{
    usersSchema.remove(
        {
            id: req.body.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not delete"
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: "Successfullu deleted"
                    }
                );
            }
        }
    );
};

module.exports = usersController;