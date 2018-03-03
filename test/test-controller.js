const assert     = require( 'assert' );
const controller = require( '../app/controller/bookmarks' );

/* global describe it */

describe( 'controller/bookmarks', () => {
  it( 'should be an: object', () => {
    assert.equal( typeof controller, 'object' );
  } );

  describe( 'controller.index', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof controller.index, 'function' );
    } );
  } );

  describe( 'controller.get_bookmark', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof controller.get_bookmark, 'function' );
    } );
  } );

  describe( 'controller.create_bookmark', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof controller.create_bookmark, 'function' );
    } );
  } );

  describe( 'controller.update_bookmark', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof controller.update_bookmark, 'function' );
    } );
  } );

  describe( 'controller.delete_bookmark', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof controller.delete_bookmark, 'function' );
    } );
  } );
} );
