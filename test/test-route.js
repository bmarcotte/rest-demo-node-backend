const assert = require( 'assert' );
const router = require( '../app/route/bookmarks' );

/* global describe it */

describe( 'route/bookmarks', () => {
  it( 'should be a: function', () => {
    assert.equal( typeof router, 'function' );
  } );

  describe( 'router.route', () => {
    it( 'should be a: function', () => {
      assert.equal( typeof router.route, 'function' );
    } );
  } );
} );
