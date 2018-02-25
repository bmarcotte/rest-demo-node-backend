const express     = require( 'express' );
const body_parser = require( 'body-parser' );
const bookmarks   = require( './app/route/bookmarks.js' );

/* global process */

const app = express();
// Support parsing of application/x-www-form-urlencoded post data
app.use( body_parser.urlencoded( { extended: true } ) );
// Support parsing of application/json type post data
app.use( body_parser.json() );

app.get( '/', function ( req, res ) {
  res.json( { message: 'express server is up and responding.' } );
} );

app.use( '/rest', bookmarks );

const port = process.env.PORT || 8080;
app.listen( port );
console.warn( 'Listening on port: ' + port );
