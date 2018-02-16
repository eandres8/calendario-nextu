const models = require('../database/db'),
Schema = models.Schema;

let eventosSchema = new Schema({
    title:String,
    start:Date,
    end:Date
});

let Evento = models.model('eventos', eventosSchema, 'eventos');

module.exports = Evento;
