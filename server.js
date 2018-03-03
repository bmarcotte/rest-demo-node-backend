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

const port     = process.env.PORT || 8080;
const host     = process.env.HOST || '0.0.0.0';
const listener = app.listen( port, host );
console.warn( 'Listening on: ' + host + ':' + port );

// For testing:

module.exports.stop = exports.stop = function () {
  if ( listener ) {
    console.warn( 'Closing listener:' );
    listener.close();
  }
};

module.exports.app = exports.app = app;
module.exports = exports;
