const http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser')
    routes = require('./routes/routes');

const port = process.env.PORT || 3000,
    app = express(),
    server = http.createServer( app );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( express.static('client') );

routes( app );

server.listen( port, ()=>{
    console.log("servidor escuchando en http://localhost:"+port);
} );
