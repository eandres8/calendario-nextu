const models = require('../database/db'),
Schema = models.Schema;

let usuarioSchema = new Schema({
    usuario:String,
    password:String
});

let Usuario = models.model('usuarios', usuarioSchema, 'usuarios');

module.exports = Usuario;
