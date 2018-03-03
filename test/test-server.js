const assert    = require( 'assert' );
const chai      = require( 'chai' );
const chai_http = require( 'chai-http' );
const server    = require( '../server' );
const app       = server.app;
const should    = chai.should();

/* global describe it after */

chai.use( chai_http );

describe( 'server', () => {
  it( 'should be an: object', () => {
    assert.equal( typeof server, 'object' );
  } );

  describe( 'server.app', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof app, 'function' );
    } );

    describe( 'GET /rest/bookmarks', () => {
      it( 'should GET all the bookmarks', ( done ) => {
        chai.request( app )
          .get( '/rest/bookmarks' )
          .end( ( err, res ) => {
            res.should.have.status( 200 );

            should.exist( res.body );
            res.body.should.be.a( 'object' );

            should.exist( res.body.bookmarks );
            should.exist( res.body.bookmarks.length );
            res.body.bookmarks.length.should.be.eql( 1 );

            done();
          } );
      } );
    } );

    describe( 'GET /rest/bookmark/1', () => {
      it( 'should GET the first bookmark', ( done ) => {
        chai.request( app )
          .get( '/rest/bookmark/1' )
          .end( ( err, res ) => {
            res.should.have.status( 200 );

            should.exist( res.body );
            res.body.should.be.a( 'object' );

            should.exist( res.body.bookmark );
            should.exist( res.body.bookmark.id );
            should.exist( res.body.bookmark.name );
            should.exist( res.body.bookmark.url );

            done();
          } );
      } );
    } );

    after( () => {
      server.stop();
    } );
  } );
} );
