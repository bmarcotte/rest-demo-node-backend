const assert = require( 'assert' );
const model  = require( '../app/model/bookmarks' );
const path   = require( 'path' );

/* global describe it */

const expected_dbfile = path.resolve( __dirname, './data/bookmarks.db' );
process.env.DBFILE = '../../test/data/bookmarks.db';

describe( 'model/bookmarks', () => {
  it( 'should be a: function', () => {
    assert.equal( typeof model, 'function' );
  } );

  describe( 'model.dbfile', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.dbfile, 'function' );
    } );
    it( 'matches: bookmarks.db', () => {
      assert.equal( model.dbfile(), expected_dbfile );
    } );
  } );

  describe( 'model.open_db', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.open_db, 'function' );
    } );
    // TODO: connection test
  } );

  describe( 'model.close_db', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.close_db, 'function' );
    } );
    // TODO: close test
  } );

  describe( 'model.find', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.find, 'function' );
    } );
    // TODO: find test
  } );

  describe( 'model.save', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.save, 'function' );
    } );
    // TODO: save test
  } );

  describe( 'model.remove', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof model.remove, 'function' );
    } );
    // TODO: remove test
  } );

} );
