var express = require('express');
var router = express.Router();
const control = require('../controllers/defaultController');
// const ness = require('../models/defaultDB');

// router.get('/', (req, res, next)=>{
//     res.status(200).json({
//         greet: 'hola desde rutas'
//     });
// });

// router.get('/control', control.greet);

/** Crud Routes */
router.post('/newMario', control.newMario);//Insertar nuevo registro
router.get('/world', control.listMario);//Obtener registros
router.put('/upWorld', control.upWorld);//Actualizar registros por ID
router.delete('/delWorld', control.delWorld);//Eliminar registros por ID

module.exports = router;