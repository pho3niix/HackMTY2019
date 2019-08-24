var express = require('express');
var router = express.Router();
const controlUsers = require('../controllers/usersController');
// const ness = require('../models/defaultDB');

// router.get('/', (req, res, next)=>{
//     res.status(200).json({
//         greet: 'hola desde rutas'
//     });
// });

// router.get('/control', control.greet);

/** Crud Routes */
router.post('/newUser', controlUsers.newUser);//Insertar nuevo registro
router.get('/userList', controlUsers.listUser);//Obtener registros
router.put('/upUser/:id', controlUsers.updateUser);//Actualizar registros por ID
router.delete('/delUser/:id', controlUsers.deleteUser);//Eliminar registros por ID

module.exports = router;