const usuario = require('../models/usuario')
const evento = require('../models/eventos')

const routes = ( app )=>{

    //valida el usuario y contraseña
    app.post('/login',( req, res )=>{
        usuario.findOne( {usuario:req.body.user, password:req.body.pass}, ( err, user ) => {
            if( err ) console.log(err);

            if( user && user._id ){
                res.send( "Validado" );
            }else{
                res.send( "Invalidado" );
            }
        } );//fin findOne
    } );//fin post /login

    //Retorna los eventos almacenados en la base de datos
    app.get('/all', ( req, res )=>{
        evento.find({}, ( err, eventos )=>{
            res.send( eventos );
        } );
    } );//fin get /all

    //crea un nuevo evento
    app.post( '/new', ( req, res )=>{
        console.log( "usuario: ",req.body );
        let ev = new evento({
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
        });

        ev.save( ( err, _evento )=>{
            if(!err){
                res.status(201);
                res.send("Se ha creado correctamente el evento");
            }else{
                res.status(400);
                res.send("Ha ocurrido un problema");
            }
        } );
    } );//fin post /new

    //elimina el evento
    app.post('/delete/:id', ( req, res )=>{

        evento.remove( { _id: req.params.id }, ( err, eve )=>{
            if( err ){
                 res.send( "No se encontro el evento para eliminar" );
            }else{
                if( eve.ok ) res.send( "Se elimino correctamente el evento" );
                else res.send( "No se encontro el evento" );
            }

        } );

    } );//fin post /delete

    app.post('/edit', ( req, res )=>{
        // evento.findOne( {_id:req.body._id}, ( err, _evento )=>{
        //     res.send( _evento );
        // } );
        console.log( req.body );
        let e = {
            start: req.body.start,
            end: req.body.end
        }
        evento.update( {_id:req.body._id}, e, ( err, _evento ) =>{
            console.log( _evento );
            if( err ){
                 res.send( "No se encontro el evento para modificar" );
            }else{
                if( _evento.ok ) res.send( "Se actualizo correctamente el evento" );
                else res.send( "No se encontro el evento" );
            }
        } );
    } );//

}// fin routes

module.exports = routes;
